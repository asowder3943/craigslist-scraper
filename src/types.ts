/**
 * Search an area within given Distance
 * @param radius The maximum distance from a given search location (in miles)
 */
export type SearchDistance = {
  distance: Number;
};

/**
 * Search By Craigslist Regional Sites
 * @param site the site subdomain for a craigslist region, see [Site Index](https://www.craigslist.org/about/sites)
 */
export type SearchSite = { site: object } & SearchDistance;

/**
 * Search by Zip Code **only validated for US zip codes**
 * @param zipCode see [Zip Code Index](https://zipcodes.org/us-zip-codes) for supported codes
 */
type SearchZip = { zipCode
  : string } & SearchDistance;
/**
 * Search by GeoLocation
 * @param latitudemust should be from -85, 85 inclusive
 * @param longitudemust should be from -180, 180 inclusive
 */
export type SearchGeoLocation = { latitude: Number; longitude: Number } & SearchDistance;

/**
 * Search Using Site, Zip Codes, or GeoLocations
 */
export type SearchLocation = SearchSite | SearchZip | SearchGeoLocation;

/**
 * Search Using Site Categories
 * @param tag refers to the 3 character category tag at end of craigslist search urls, see [Category Tags](https://gist.github.com/asowder3943/8ef9512ad9c0daf87c721721e415c1a3)
 */
type SearchCategory = { category: object };

/**
 * Search terms to include in craigslist search
 * @param term can be as simple as one word or use `|` and `&` as well as `()` to combine search terms
 */
type SearchTerm = { term: string };

/**
 * Search Urls to include in craigslist search
 * @param url refers to precrafted craigslist search url
 */
type SearchUrl = { url: String };

/**
 * Searches Consist of `locations`, `categories`, `terms`, and `urls`
 * At least One of these items must be defined to limit scope of the scraping
 * @param locations define where on craigslist to search
 * @param categories define what categories at each location to search
 * @param terms define the terms to be used in each search
 * @param urls provide predetermined page urls to be scraped
 */
type Search =
  | {
      locations?: SearchLocation[];
      categories?: SearchCategory | SearchCategory[];
      terms?: SearchTerm[];
      urls: SearchUrl[];
    }
  | {
      locations?: SearchLocation[];
      categories?: SearchCategory[];
      terms: SearchTerm[];
      urls?: SearchUrl[];
    }
  | {
      locations?: SearchLocation[];
      categories: SearchCategory[];
      terms?: SearchTerm | SearchTerm[];
      urls?: SearchUrl[];
    }
  | {
      locations: SearchLocation | SearchLocation[];
      categories?: SearchCategory[];
      terms?: SearchTerm[];
      urls?: SearchUrl[];
    };

/**
 * Accept Search Inputs through the apify input forms
 * @param site as a lists of strings with optional distance parameter
 * @param geoLocation as a list of strings with optional distance parameter
 * @param zip as a list of strings with optional distance parameter
 * @param category as a list of strings
 * @param query as a list of strings
 * @param titleOnly as a list of strings
 * @param urls as a list of strings
 */
export type InputSchema = {
  site?: string[];
  geoLocation?: string[];
  zip?: string[];
  category?: string[];
  query?: string[];
  // titleOnly?: Boolean;
  urls?: string[];
};
export type DefinedInputSchema = {
  site: string[];
  geoLocation: string[];
  zip: string[];
  category: string[];
  query: string[];
  // titleOnly?: Boolean;
  urls: string[];
};

/**
 * Craigslist Posts are Recorded with 
 * @param url as string
 * @param title as string
 * @param date as string
 */
export type CraigslistPost = { url: string; title: string; date: string };
