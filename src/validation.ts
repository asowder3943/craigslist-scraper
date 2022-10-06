import {
  InputSchema,
  DefinedInputSchema,
  SearchLocation,
  SearchGeoLocation,
  SearchSite,
  SearchZip,
  SearchCategory,
  Search,
  CraigslistCategory,
  CraigslistLocation,
} from './types.js';
import { CRAIGSLIST_SITES, CRAIGSLIST_CATEGORIES } from './consts.js';
import { DEFAULT_SEARCH_DISTANCE } from './defauts.js';
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
  var matches = Object.entries(CRAIGSLIST_SITES).filter(
    (x) => x[0] === input || x[1].subdomain === input || x[1].name === input,
  );
  if (matches.length === 0) {
    throw new ApifyInputError(`Unable to determine intended site from input "${input}"\n
    provided site must match a subdomain or property name of an item on the list of [known sites](https://gist.github.com/asowder3943/b0c2c0339feb41a7bea9def472c1931d)`);
  }
  return CRAIGSLIST_SITES[matches[0][0]];
}

/**
 * Retrieve Craigslist Category Object using match string
 * @param input a single string to match against CRAIGSLIST_CATEGORIES enum
 * @returns `object: {tag: string, name: string, parent: string}`
 */
function getCraigslistCategory(input: string): CraigslistCategory {
  var matches = Object.entries(CRAIGSLIST_CATEGORIES).filter(
    (x) => x[0] === input || x[1].tag === input || x[1].name === input,
  );
  if (matches.length === 0) {
    throw new ApifyInputError(`Unable to determine intended category from input "${input}"\n
    provided category must match a property of an item on the list of [known categories](https://gist.github.com/asowder3943/b0c2c0339feb41a7bea9def472c1931d)`);
  }
  return CRAIGSLIST_CATEGORIES[matches[0][0]];
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
      'No Search Criteria found - You must provide at least one search option to limit webscraping scope',
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
  var distance = parseFloat(input);
  if (Number.isNaN(distance)) {
    throw new ApifyInputError(`Unable to parse distance in miles from: "${input}")\n
  distance should be a numeric string with no commas deliniating powers of 10`);
  }
  if (distance < 0 || distance > 250) {
    throw new ApifyInputError(`Provided Distance Out of Range: "${input}"\n
      distance should be greater than or equal to 0 miles, but not greater than 250 miles`);
  }
  if (distance == 0) {
    distance = DEFAULT_SEARCH_DISTANCE;
  }
  return distance;
}

/**
 * Ensure all provided sites match known craigslist sites with valid search distances
 * @param input list of sites to search with optional distance parameters`String[]`
 * @returns `SearchSite[]` list of validated SiteSearch objects
 * @throws ApifyInputError
 */
function ensureValidSiteInput(input: string[]): SearchSite[] {
  var siteLocations: SearchSite[] = [];
  for (var i in input) {
    var validatedSite = getCraigslistSite(input[i]);
    siteLocations.push({ site: validatedSite });
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
  for (var i in input) {
    var params = input[i].split(',');
    if (params.length > 3 || params.length < 2) {
      throw new ApifyInputError(`Unable to parse "${input[i]}" - wrong number of parameters provided\n
      input should be in the form \"latitude, longitude, distance\" or \"latitude, longitude\". Example: \"32.609856, -85.480782, 10\"`);
    }
    var validatedLatitude = parseFloat(params[0]);
    if (Number.isNaN(validatedLatitude)) {
      throw new ApifyInputError(`Unable to parse latitude from: "${input}")\n
    latitude should be a numeric string with no commas deliniating powers of 10`);
    }
    if (validatedLatitude < -85 || validatedLatitude > 85) {
      throw new ApifyInputError(`Provided Latitude Out of Range: "${validatedLatitude}"\n
        latitude should be greater than or equal to -85, but not greater than 85`);
    }
    var validatedLongitude = parseFloat(params[1]);
    if (Number.isNaN(validatedLongitude)) {
      throw new ApifyInputError(`Unable to parse latitude from: "${input}")\n
    latitude should be a numeric string with no commas deliniating powers of 10`);
    }
    if (validatedLongitude < -180 || validatedLongitude > 180) {
      throw new ApifyInputError(`Provided Longitude Out of Range: "${validatedLongitude}"\n
        longitude should be greater than or equal to -180, but not greater than 180`);
    }
    var validatedDistance = DEFAULT_SEARCH_DISTANCE;
    if (params.length === 3) {
      validatedDistance = ensureValidDistanceInput(params[2]);
    }
    geoLocations.push({
      latitude: validatedLatitude,
      longitude: validatedLongitude,
      distance: validatedDistance,
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
  for (var i in input) {
    var params = input[i].split(',');
    if (params.length > 2 || params.length < 1) {
      throw new ApifyInputError(`Unable to parse "${input[i]}" - wrong number of parameters provided\n
      input should be in the form \"zipCode, distance\" or \"zipCode\". Example: \"24018, 12\"`);
    }
    var validatedZIP = parseInt(params[0]);

    if (Number.isNaN(validatedZIP)) {
      throw new ApifyInputError(`Unable to parse ZipCode from: "${input}")\n
  ZipCode should be 5 digit numeric string`);
    }
    if (validatedZIP.toString().length !== 5) {
      throw new ApifyInputError(`Unable to parse ZipCode from: "${input}")\n
  ZipCode should be 5 digit numeric string`);
    }
    var validatedDistance = DEFAULT_SEARCH_DISTANCE;
    if (params.length === 2) {
      validatedDistance = ensureValidDistanceInput(params[1]);
    }
    zipLocations.push({
      zipCode: validatedZIP,
      distance: validatedDistance,
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
  for (var i in input) {
    var validatedCategory = getCraigslistCategory(input[i]);
    siteCategories.push({ category: validatedCategory });
  }
  return siteCategories;
}

/**
 * Ensure all provided queries are combined and encoded
 * @param input list of queries as strings
 * @returns `string` single validated query string
 */
function ensureValidQuery(input: string[]): string {
  if (input.length === 0) {
    return '';
  }
  var unescapedQuery: string = '(';
  for (var i = 0; i < input.length; i++) {
    var currentQuery = input[i].trim();
    if (currentQuery.length === 0) {
      throw new ApifyInputError(
        `Invalid Empty Query Submitted, query cannot be empty string if provided`,
      );
    }
    unescapedQuery += currentQuery;
    if (i < input.length - 1 && currentQuery.length > 0) {
      unescapedQuery += ')|(';
    }
    if (i === input.length - 1) {
      unescapedQuery += ')';
    }
  }
  var escapedQuery = encodeURIComponent(unescapedQuery)
    .replaceAll('(', '%28')
    .replaceAll(')', '%29');
  // if (_escaped_query.split("%7C").length - 1 > 4)
  // throw new ApifyInputError(
  //   `Too Many Union Conditions in Query: Current number of unions ${
  //     _escaped_query.split("%7C").length - 1
  //   }\nMaximum number of query union operators is 4`
  // );
  return escapedQuery;
}

/**
 * Validates Each Section of Provided input Schema
 * and returns Search Object
 * @param input object of type `InputSchema`
 * @returns Search Object
 */
export function validateInput(input: InputSchema): Search {
  var definedInput = ensureDefinedInput(input);
  var nonEmptyInput = ensureNonEmptyInput(definedInput);
  var validatedSitesInput = ensureValidSiteInput(nonEmptyInput.site);
  var validatedGeoLocationsInput = ensureValidGeoLocationInput(
    nonEmptyInput.geoLocation,
  );
  var validatedZipCodeInput = ensureValidZipCode(nonEmptyInput.zipCode);
  var validatedCategoryInput = ensureValidCategoryInput(nonEmptyInput.category);
  var validatedQuery = ensureValidQuery(nonEmptyInput.query);
  var validatedLocations: SearchLocation[] = validatedSitesInput;
  validatedLocations = validatedLocations.concat(validatedGeoLocationsInput);
  validatedLocations = validatedLocations.concat(validatedZipCodeInput);

  if (validatedLocations.length === 0) {
    for (var site in CRAIGSLIST_SITES) {
      validatedLocations.push({ site: CRAIGSLIST_SITES[site] });
    }
  }

  return {
    locations: validatedLocations,
    categories: validatedCategoryInput,
    query: validatedQuery,
    urls: definedInput.urls,
  };
}

/**
 * Get Generate Request Urls From Search Object
 * @param search
 * @returns
 */
export function getRequestUrls(search: Search): string[] {
  var urls: string[] = search.urls;
  for (var location in search.locations) {
    var currentLocation = search.locations[location];
    var subdomain = 'auburn';
    var paramString = '';

    if ('distance' in currentLocation) {
      if (
        currentLocation.distance !== undefined &&
        currentLocation.distance !== null
      ) {
        paramString += `search_distance=${currentLocation.distance}`;
      }
    }

    if ('site' in currentLocation) {
      subdomain = currentLocation.site.subdomain;
    }

    if ('latitude' in currentLocation) {
      var latitude = currentLocation.latitude;
      var longitude = currentLocation.longitude;
      paramString += `&lat=${latitude}&lon=${longitude}`;
    }

    if ('zipCode' in currentLocation) {
      var zip = currentLocation.zipCode;
      paramString += `&postal=${zip}`;
    }

    paramString += `&query=${search.query}&srchType=T`;

    if (search.categories.length === 0) {
      urls.push(`https://${subdomain}.craigslist.org/?${paramString}`);
    } else {
      for (var category in search.categories) {
        urls.push(
          `https://${subdomain}.craigslist.org/search/${search.categories[category].category.tag}/?${paramString}`,
        );
      }
    }
  }
  return urls;
}

export function getRequestUrlsFromInput(input: InputSchema): string[] {
  return getRequestUrls(validateInput(input));
}
