import {
  InputSchema,
  DefinedInputSchema,
  SearchLocation,
  SearchGeoLocation,
  SearchSite,
  SearchZip,
  SearchCategory,
  Search,
  isSearchGeoLocation,
  isSearchSite,
  isSearchZip,
  CraigslistCategory,
  CraigslistLocation,
} from "./types.js";
import { CRAIGSLIST_SITES, CRAIGSLIST_CATEGORIES } from "./consts.js";
import { DEFAULT_SEARCH_DISTANCE } from "./defauts.js";
/**
 * ApifyInputError is a custom error class to address potentially invalid inputs
 * recieved through the Apify Actor Input Forms
 * @param msg as string that describes the particular input failure
 */
export class ApifyInputError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, ApifyInputError.prototype);
  }
}

/**
 * Retrieve Craigslist Site Object using match string
 * @param input a single string to match against CRAIGSLIST_SITES enum
 * @returns `object: {subdomain: string, name: string}`
 */
function getCraigslistSite(input: string): CraigslistLocation {
  var _matches = Object.entries(CRAIGSLIST_SITES).filter(
    (x) => x[0] === input || x[1].subdomain === input || x[1].name === input
  );
  if (_matches.length === 0) {
    throw new ApifyInputError(`Unable to determine intended site from input "${input}"\n
    provided site must match a subdomain or property name of an item on the list of [known sites](https://gist.github.com/asowder3943/b0c2c0339feb41a7bea9def472c1931d)`);
  }
  return CRAIGSLIST_SITES[_matches[0][0]];
}

/**
 * Retrieve Craigslist Category Object using match string
 * @param input a single string to match against CRAIGSLIST_CATEGORIES enum
 * @returns `object: {tag: string, name: string, parent: string}`
 */
function getCraigslistCategory(input: string): CraigslistCategory {
  var _matches = Object.entries(CRAIGSLIST_CATEGORIES).filter(
    (x) => x[0] === input || x[1].tag === input || x[1].name === input
  );
  if (_matches.length === 0) {
    throw new ApifyInputError(`Unable to determine intended category from input "${input}"\n
    provided category must match a property of an item on the list of [known categories](https://gist.github.com/asowder3943/b0c2c0339feb41a7bea9def472c1931d)`);
  }
  return CRAIGSLIST_CATEGORIES[_matches[0][0]];
}

/**
 * Intermediate Input Validation - Ensures no provided inputs are undefined
 * @param input as `InputSchema`
 * @returns `DefinedInputSchema`
 */
function ensureDefinedInput(input: InputSchema): DefinedInputSchema {
  input.site = input.site ?? [];
  input.geoLocation = input.geoLocation ?? [];
  input.zipCode = input.zipCode ?? [];
  input.category = input.category ?? [];
  input.query = input.query ?? [];
  input.urls = input.urls ?? [];
  return input as DefinedInputSchema;
}

/**
 * Trivial Input Validation - Should Throw Error in case no search options provided
 * @param input as `DefinedInputSchema`
 * @returns `DefinedInputSchema`
 * @throws ApifyInputError
 *
 */
function ensureNonEmptyInput(input: DefinedInputSchema): DefinedInputSchema {
  input = ensureDefinedInput(input);
  if (
    input.site.length === 0 &&
    input.geoLocation.length === 0 &&
    input.zipCode.length === 0 &&
    input.category.length === 0 &&
    input.query.length === 0 &&
    input.urls.length === 0
  ) {
    throw new ApifyInputError(
      "No Search Criteria found - You must provide at least one search option to limit webscraping scope"
    );
  }
  return input;
}

/**
 * Ensure provided distance string mateches valid search distance
 * @param input as single string containing distance numeric
 * @returns `number` search distance in miles
 * @throws `ApifyInputError`
 */
function ensureValidDistanceInput(input: string): number {
  var _distance = parseFloat(input);
  if (Number.isNaN(_distance)) {
    throw new ApifyInputError(`Unable to parse distance in miles from: "${input}")\n
  distance should be a numeric string with no commas deliniating powers of 10`);
  }
  if (_distance < 0 || _distance > 250) {
    throw new ApifyInputError(`Provided Distance Out of Range: "${input}"\n
      distance should be greater than or equal to 0 miles, but not greater than 250 miles`);
  }
  if (_distance == 0) _distance = DEFAULT_SEARCH_DISTANCE;
  return _distance;
}

/**
 * Ensure all provided sites match known craigslist sites with valid search distances
 * @param input list of sites to search with optional distance parameters`String[]`
 * @returns `SearchSite[]` list of validated SiteSearch objects
 * @throws ApifyInputError
 */
function ensureValidSiteInput(input: string[]): SearchSite[] {
  var siteLocations: SearchSite[] = [];
  for (var _i in input) {
    var _validated_site = getCraigslistSite(input[_i]);
    siteLocations.push({ site: _validated_site });
  }
  return siteLocations;
}

/**
 * Ensure all provided Geo Locations are valid and optional search distance parameters are in range
 * @param input list of comma separrated strings latitude, longitude, distance
 * @returns `SearchGeoLocation[]` list of validated GeoLocationSearch objects
 * @throws ApifyInputError
 */
function ensureValidGeoLocationInput(input: string[]): SearchGeoLocation[] {
  var geoLocations: SearchGeoLocation[] = [];
  for (var _i in input) {
    var _params = input[_i].split(",");
    if (_params.length > 3 || _params.length < 2) {
      throw new ApifyInputError(`Unable to parse "${input[_i]}" - wrong number of parameters provided\n
      input should be in the form \"latitude, longitude, distance\" or \"latitude, longitude\". Example: \"32.609856, -85.480782, 10\"`);
    }
    var _validated_lat = parseFloat(_params[0]);
    if (Number.isNaN(_validated_lat)) {
      throw new ApifyInputError(`Unable to parse latitude from: "${input}")\n
    latitude should be a numeric string with no commas deliniating powers of 10`);
    }
    if (_validated_lat < -85 || _validated_lat > 85) {
      throw new ApifyInputError(`Provided Latitude Out of Range: "${_validated_lat}"\n
        latitude should be greater than or equal to -85, but not greater than 85`);
    }
    var _validated_long = parseFloat(_params[1]);
    if (Number.isNaN(_validated_long)) {
      throw new ApifyInputError(`Unable to parse latitude from: "${input}")\n
    latitude should be a numeric string with no commas deliniating powers of 10`);
    }
    if (_validated_long < -180 || _validated_long > 180) {
      throw new ApifyInputError(`Provided Longitude Out of Range: "${_validated_long}"\n
        longitude should be greater than or equal to -180, but not greater than 180`);
    }
    var _validated_distance = DEFAULT_SEARCH_DISTANCE;
    if (_params.length === 3) {
      _validated_distance = ensureValidDistanceInput(_params[2]);
    }
    geoLocations.push({
      latitude: _validated_lat,
      longitude: _validated_long,
      distance: _validated_distance,
    });
  }
  return geoLocations;
}

/**
 * Ensure all provided ZipCodes are valid and optional search distance parameters are in range
 * @param input list of zip code string inputs with optional distance parameter
 * @returns `SearchZip[]` A list of validated SearchZip objects
 * @throws ApifyInputError
 */
function ensureValidZipCode(input: string[]): SearchZip[] {
  var zipLocations: SearchZip[] = [];
  for (var _i in input) {
    var _params = input[_i].split(",");
    if (_params.length > 2 || _params.length < 1) {
      throw new ApifyInputError(`Unable to parse "${input[_i]}" - wrong number of parameters provided\n
      input should be in the form \"zipCode, distance\" or \"zipCode\". Example: \"24018, 12\"`);
    }
    var _validated_zip = parseInt(_params[0]);

    if (Number.isNaN(_validated_zip)) {
      throw new ApifyInputError(`Unable to parse ZipCode from: "${input}")\n
  ZipCode should be 5 digit numeric string`);
    }
    if (_validated_zip.toString().length !== 5) {
      throw new ApifyInputError(`Unable to parse ZipCode from: "${input}")\n
  ZipCode should be 5 digit numeric string`);
    }
    var _validated_distance = DEFAULT_SEARCH_DISTANCE;
    if (_params.length === 2) {
      _validated_distance = ensureValidDistanceInput(_params[1]);
    }
    zipLocations.push({
      zipCode: _validated_zip,
      distance: _validated_distance,
    });
  }
  return zipLocations;
}

/**
 * Ensure all provided categories match known craigslist categories
 * @param input list of categories as strings
 * @returns `SearchCategory[]` list of validated SearchCategory objects
 * @throws ApifyInputError
 */
function ensureValidCategoryInput(input: string[]): SearchCategory[] {
  var siteCategories: SearchCategory[] = [];
  for (var _i in input) {
    var _validated_category = getCraigslistCategory(input[_i]);
    siteCategories.push({ category: _validated_category });
  }
  return siteCategories;
}

/**
 * Ensure all provided queries are combined and encoded
 * @param input list of queries as strings
 * @returns `string` single validated query string
 */
function ensureValidQuery(input: string[]): string {
  if (input.length === 0) return "";
  var _unescapedQuery: string = "(";
  for (var i = 0; i < input.length; i++) {
    var _currentQuery = input[i].trim();
    if (_currentQuery.length === 0)
      throw new ApifyInputError(
        `Invalid Empty Query Submitted, query cannot be empty string if provided`
      );
    _unescapedQuery += _currentQuery;
    if (i < input.length - 1 && _currentQuery.length > 0)
      _unescapedQuery += ")|(";
    if (i === input.length - 1) _unescapedQuery += ")";
  }
  var _escaped_query = encodeURIComponent(_unescapedQuery)
    .replaceAll("(", "%28")
    .replaceAll(")", "%29");
  if (_escaped_query.split("%7C").length - 1 > 4)
    throw new ApifyInputError(
      `Too Many Union Conditions in Query: Current number of unions ${
        _escaped_query.split("%7C").length - 1
      }\nMaximum number of query union operators is 4`
    );
  return _escaped_query;
}

/**
 * Validates Each Section of Provided input Schema
 * and returns Search Object
 * @param input object of type `InputSchema`
 * @returns Search Object
 */
export function validateInput(input: InputSchema): Search {
  var _definedInput = ensureDefinedInput(input);
  var _nonEmptyInput = ensureNonEmptyInput(_definedInput);
  var _validatedSitesInput = ensureValidSiteInput(_nonEmptyInput.site);
  var _validatedGeoLocationsInput = ensureValidGeoLocationInput(
    _nonEmptyInput.geoLocation
  );
  var _validatedZipCodeInput = ensureValidZipCode(_nonEmptyInput.zipCode);
  var _validatedCategoryInput = ensureValidCategoryInput(
    _nonEmptyInput.category
  );
  var _validatedQuery = ensureValidQuery(_nonEmptyInput.query);
  var _validatedLocations: SearchLocation[] = _validatedSitesInput;
  _validatedLocations = _validatedLocations.concat(_validatedGeoLocationsInput);
  _validatedLocations = _validatedLocations.concat(_validatedZipCodeInput);

  if (_validatedLocations.length === 0)
    for (var _site in CRAIGSLIST_SITES) {
      _validatedLocations.push({ site: CRAIGSLIST_SITES[_site] });
    }

  return {
    locations: _validatedLocations,
    categories: _validatedCategoryInput,
    query: _validatedQuery,
    urls: _definedInput.urls,
  };
}

/**
 * Get Generate Request Urls From Search Object
 * @param search
 * @returns
 */
export function getRequestUrls(search: Search): string[] {
  var urls: string[] = search.urls;
  for (var _loc in search.locations) {
    var _curLocation = search.locations[_loc];
    var _subdomain = "auburn";
    var _param_string = "";

    if ("distance" in _curLocation) {
      if (_curLocation.distance !== undefined && _curLocation.distance !== null)
        _param_string += `search_distance=${_curLocation.distance}`;
    }
    
    if (isSearchSite(_curLocation)) {
      _subdomain = _curLocation.site.subdomain;
    }

    if (isSearchGeoLocation(_curLocation)) {
      var _lat = _curLocation.latitude;
      var _long = _curLocation.longitude;
      _param_string += `&lat=${_lat}&lon=${_long}`;
    }

    if (isSearchZip(_curLocation)) {
      var _zip = _curLocation.zipCode;
      _param_string += `&postal=${_zip}`;
    }

    _param_string += `&query=${search.query}`;

    if (search.categories.length === 0) {
      urls.push(`https://${_subdomain}.craigslist.org/?${_param_string}`);
    } else
      for (var _cat in search.categories) {
        urls.push(
          `https://${_subdomain}.craigslist.org/search/${search.categories[_cat].category.tag}/?${_param_string}`
        );
      }
  }
  return urls;
}

export function getRequestUrlsFromInput(input: InputSchema): string[] {
  return getRequestUrls(validateInput(input));
}
