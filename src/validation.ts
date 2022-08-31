import {
  InputSchema,
  DefinedInputSchema,
  SearchLocation,
  SearchGeoLocation,
  SearchSite,
} from "./types.js";
import { CRAIGSLIST_SITES, CRAIGSLIST_CATEGORIES } from "./consts.js";

export class ApifyInputError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, ApifyInputError.prototype);
  }
}

function getCraigslistSite(input: string): object {
  var _matches = Object.entries(CRAIGSLIST_SITES).filter(
    (x) => x[0] === input || x[1].subdomain === input || x[1].name === input
  );
  if (_matches.length === 0) {
    throw new ApifyInputError(`Unable to determine intended site from input '${input}'\n
    provided site must match an the subdomain or property name of an item on the list of [known sites](https://gist.github.com/asowder3943/b0c2c0339feb41a7bea9def472c1931d)`);
  }
  return CRAIGSLIST_SITES[_matches[0][0]];
}

// function getCraigslistCategory(input: string): object | null {
//   var _matches = Object.entries(CRAIGSLIST_CATEGORIES).filter(
//     (x) => x[0] === input || x[1].tag === input || x[1].name === input
//   );
//   if (_matches.length === 0){
//     throw new ApifyInputError(`Unable to determine intended site from input\n
//     provided site must match an the subdomain or property name of an item on the list of [known sites](https://gist.github.com/asowder3943/b0c2c0339feb41a7bea9def472c1931d)`);
//   }
//   return CRAIGSLIST_SITES[_matches[0][0]];
// }

function ensureDefinedInput(input: InputSchema): DefinedInputSchema {
  input.site = input.site ?? [];
  input.geoLocation = input.geoLocation ?? [];
  input.zip = input.zip ?? [];
  input.category = input.category ?? [];
  input.query = input.query ?? [];
  input.urls = input.urls ?? [];
  return input as DefinedInputSchema;
}

function ensureNonEmptyInput(input: DefinedInputSchema): DefinedInputSchema {
  // Ensure that at least one search option was provided
  input = ensureDefinedInput(input);
  if (
    input.site.length === 0 &&
    input.geoLocation.length === 0 &&
    input.zip.length === 0 &&
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

function ensureValidDistanceInput(input: string): number {
  var _distance = parseFloat(input);
  if (Number.isNaN(_distance)) {
    throw new ApifyInputError(`Unable to parse distance in miles from: ${input})\n
  distance should be a numeric string with no commas deliniating powers of 10`);
  }
  if (_distance < 0 || _distance > 250) {
    throw new ApifyInputError(`Provided Distance Out of Range: ${input}\n
      distance should be greater than or equal to 0 miles, but not greater than 250 miles`);
  }
  return _distance;
}

function ensureValidSiteInput(input: string[]): SearchSite[] {
  var siteLocations: SearchSite[] = [];
  for (var _i in input) {
    var _params = input[_i].split(",");
    if (_params.length > 2 || _params.length < 1) {
      throw new ApifyInputError(`Unable to parse ${input[_i]} - wrong number of parameters provided\n
      input should be in the form \"SITE, distance\" or \"SITE\". Example: \"ROANOKE, 15\"`);
    }
    var _site = _params[0];
    var _distance = 0;
    var _validated_site = getCraigslistSite(_site);
    if (_params.length === 2) {
      _distance = ensureValidDistanceInput(_params[1]);
    }
    siteLocations.push({ site: _validated_site, distance: _distance });
  }
  return siteLocations;
}

function ensureValidGeoLocationInput( input: string[]): SearchGeoLocation[]{
  var geoLocations: SearchGeoLocation[] = [];
  for (var _i in input) {
    var _params = input[_i].split(",");
    if (_params.length > 3 || _params.length < 2) {
      throw new ApifyInputError(`Unable to parse ${input[_i]} - wrong number of parameters provided\n
      input should be in the form \"latitude, longitude, distance\" or \"latitude, longitude\". Example: \"32.609856, -85.480782, 10\"`);
    }
    var _validated_lat = parseFloat(_params[0]);
    if (Number.isNaN(_validated_lat)) {
      throw new ApifyInputError(`Unable to parse latitude from: ${input})\n
    latitude should be a numeric string with no commas deliniating powers of 10`);
    }
    if (_validated_lat < -85 || _validated_lat > 85) {
      throw new ApifyInputError(`Provided Latitude Out of Range: ${_validated_lat}\n
        latitude should be greater than or equal to -85, but not greater than 85`);
    }
    var _validated_long = parseFloat(_params[1]);
    if (Number.isNaN(_validated_long)) {
      throw new ApifyInputError(`Unable to parse latitude from: ${input})\n
    latitude should be a numeric string with no commas deliniating powers of 10`);
    }
    if (_validated_long < -180 || _validated_long > 180) {
      throw new ApifyInputError(`Provided Latitude Out of Range: ${_validated_lat}\n
        latitude should be greater than or equal to -85, but not greater than 85`);
    }
    var _validated_distance = 0;
    if (_params.length === 3) {
      _validated_distance = ensureValidDistanceInput(_params[2]);
    }
    geoLocations.push({ latitude: _validated_lat, longitude: _validated_long, distance: _validated_distance });
  }
  return geoLocations
} 

export function validateInput(input: InputSchema): SearchLocation[] {
  var _definedInput = ensureDefinedInput(input);
  var _nonEmptyInput = ensureNonEmptyInput(_definedInput);
  var _validatedSitesInput = ensureValidSiteInput(_nonEmptyInput.site);
  var _validatedGeoLocationsInput = ensureValidGeoLocationInput(_nonEmptyInput.geoLocation)
  return _validatedSitesInput;
}
