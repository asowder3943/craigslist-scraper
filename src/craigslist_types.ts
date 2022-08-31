/** Subdomain of the Cragslist Website */
export type Site = { site: string };
/** North American Zip Code */
export type ZipCode = { zipCode: string };
/** Geographic Location */
export type GeoLocation = { latitude: Number; longitude: Number };

/**
 * Search an area within given Distance
 * @param `radius` The maximum distance from a given search location (in miles)
 */
export type SearchDistance = {
  distance: Number | undefined;
};

/**
 * Search By Craigslist Regional Sites
 * @param `site` the site subdomain for a craigslist region, see [Site Index](https://www.craigslist.org/about/sites)
 */
export type SearchSite = Site & SearchDistance;

/**
 * Search by Zip Code - **only validated for US zip codes**
 * @param `zipCode` see [Zip Code Index](https://zipcodes.org/us-zip-codes) for supported codes
 */
export type SearchZip = ZipCode & SearchDistance;
/**
 * Search by GeoLocation
 * @param `latitude` - must be from -85, 85 inclusive
 * @param `longitude` - must be from -180, 180 inclusive
 */
export type SearchGeoLocation = GeoLocation & SearchDistance;

/**
 * Search Using Site, Zip Codes, or GeoLocations
 * Include Search Distance to Explore area within a range of the location
 */
export type SearchLocation = SearchSite | SearchZip | SearchGeoLocation;

/**
 * Search Using Site Categories
 * @param `tag` refers to the 3 character category tag at end of craigslist search urls, see [Category Tags](https://gist.github.com/asowder3943/8ef9512ad9c0daf87c721721e415c1a3)
 */
export type SearchCategory = {
  tag: string;
};

/**
 * Search terms to include in craigslist search
 * @param `term` can be as simple as one word or use `|` and `&` as well as `()` to combine search terms
 */
export type SearchTerm = {
  term: string;
};

/**
 * Search Urls to include in craigslist search
 * @param `url` refers to precrafted craigslist search url
 */
export type SearchUrl = { url: String };

/**
 * Searches include locations, categories, terms, and urls
 * All of these parameters are optional but at least one of them must be defined
 */
export type Search =
  | {
      locations: SearchLocation | SearchLocation[] | undefined;
      categories: SearchCategory | SearchCategory[] | undefined;
      terms: SearchTerm | SearchTerm[];
      urls: SearchUrl | undefined;
    }
  | {
      locations: SearchLocation | SearchLocation[];
      categories: SearchCategory | SearchCategory[] | undefined;
      terms: SearchTerm | SearchTerm[] | undefined;
      urls: SearchUrl | undefined;
    }
  | {
      locations: SearchLocation | SearchLocation[] | undefined;
      categories: SearchCategory | SearchCategory[];
      terms: SearchTerm | SearchTerm[] | undefined;
      urls: SearchUrl | undefined;
    }
  | {
      locations: SearchLocation | SearchLocation[];
      categories: SearchCategory | SearchCategory[];
      terms: SearchTerm | SearchTerm[];
      urls: SearchUrl | undefined;
    };
