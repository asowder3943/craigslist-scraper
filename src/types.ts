/**
 * Search an area within given Distance
 * @param radius The maximum distance from a given search location (in miles)
 */
export type SearchDistance = {
  distance: number;
};

/**
 * Search By Craigslist Regional Sites
 * @param site the site subdomain for a craigslist region, see [Site Index](https://www.craigslist.org/about/sites)
 */
export type SearchSite = { site: object };

/** TypeGuard for the SearchSite */
export function isSearchSite(obj: unknown): obj is SearchSite {
  return (
    obj &&
    typeof obj === "object" &&
    obj["site"] &&
    typeof obj["site"] === "object" &&
    obj["site"]["subdomain"] &&
    obj["site"]["name"] &&
    typeof obj["site"]["subdomain"] === "string" &&
    typeof obj["site"]["name"] === "string"
  )
}
/**
 * Search by Zip Code **only validated for US zip codes**
 * @param zipCode see [Zip Code Index](https://zipcodes.org/us-zip-codes) for supported codes
 */
export type SearchZip = { zipCode: number } & SearchDistance;

/** TypeGuard for the SearchZip */
export function isSearchZip(obj: unknown): obj is SearchZip {
  return (
    obj &&
    typeof obj === "object" &&
    obj["zipCode"] &&
    typeof obj["zipCode"] === "number" &&
    typeof obj["distance"] === "number" &&
    typeof obj["distance"] !== null
  );
}

/**
 * Search by GeoLocation
 * @param latitude should be from -85, 85 inclusive
 * @param longitude should be from -180, 180 inclusive
 */
export type SearchGeoLocation = {
  latitude: number;
  longitude: number;
} & SearchDistance;

/** TypeGuard for the SearchGeoLocation */
export function isSearchGeoLocation(obj: unknown): obj is SearchGeoLocation {
  return (
    obj &&
    typeof obj === "object" &&
    obj["latitude"] &&
    obj["longitude"] &&
    typeof obj["latitude"] === "number" &&
    typeof obj["longitude"] === "number" &&
    typeof obj["distance"] === "number" &&
    typeof obj["distance"] !== null
  );
}

/**
 * Search Using Site, Zip Codes, or GeoLocations
 */
export type SearchLocation = SearchSite | SearchZip | SearchGeoLocation;

/**
 * Search Using Site Categories
 * @param tag refers to the 3 character category tag at end of craigslist search urls, see [Category Tags](https://gist.github.com/asowder3943/8ef9512ad9c0daf87c721721e415c1a3)
 */
export type SearchCategory = { category: object };

/**
 * Searches Consist of `locations`, `categories`, `query`, and `urls`
 * At least One of these items must be defined to limit scope of the scraping
 * @param locations define where on craigslist to search
 * @param categories define what categories at each location to search
 * @param query define the query to be used in each search
 * @param urls provide predetermined page urls to be scraped
 */
export type Search = {
  locations: SearchLocation[];
  categories: SearchCategory[];
  query: string;
  urls: string[];
};

/**
 * Accept Search Inputs through the apify input forms
 * @param site as a lists of strings with optional distance parameter
 * @param geoLocation as a list of strings with optional distance parameter
 * @param zipCode as a list of strings with optional distance parameter
 * @param category as a list of strings
 * @param query as a list of strings
 * @param titleOnly as a list of strings
 * @param urls as a list of strings
 */
export type InputSchema = {
  site?: string[];
  geoLocation?: string[];
  zipCode?: string[];
  category?: string[];
  query?: string[];
  urls?: string[];
};

/**
 * Intermediate DefinedInputSchema Mirrors InputSchema, but no defined properties cannot be undefined
 * @param site as a lists of strings with optional distance parameter
 * @param geoLocation as a list of strings with optional distance parameter
 * @param zipCode as a list of strings with optional distance parameter
 * @param category as a list of strings
 * @param query as a list of strings
 * @param titleOnly as a list of strings
 * @param urls as a list of strings
 */
export type DefinedInputSchema = {
  site: string[];
  geoLocation: string[];
  zipCode: string[];
  category: string[];
  query: string[];
  urls: string[];
};

/**
 * Craigslist Posts are Recorded with
 * @param url as string
 * @param title as string
 * @param date as string
 */
export type CraigslistPost = { url: string; title: string; date: string };
