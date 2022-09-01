import { PlaywrightCrawler } from "crawlee";
import { strict as assert } from "assert";
import {
  CraigslistPost,
  Search,
  isSearchSite,
  isSearchZip,
  isSearchGeoLocation
} from "./types.js";
import { Actor } from "apify";

export function generateRequestUrls(search: Search): string[] {
  var urls: string[] = search.urls;
  for (var _loc in search.locations) {
    var _curLocation = search.locations[_loc]
    var _subdomain = 'auburn'
    var _param_string = ''

    if (_curLocation.distance !== undefined && _curLocation.distance !== null) _param_string += `search_distance=${_curLocation.distance}`

    if (isSearchSite(_curLocation)) {
      _subdomain = _curLocation.site.subdomain
    }

    if (isSearchGeoLocation(_curLocation)) {
      var _lat = _curLocation.latitude
      var _long = _curLocation.longitude
      _param_string += `&lat=${_lat}&lon=${_long}`
    }

    if (isSearchZip(_curLocation)) {
      var _zip = _curLocation.zipCode
      _param_string += `&postal=${_zip}`
    }

    _param_string += `&query=${search.query}`

    if (search.categories.length === 0) {
      urls.push(`https://${_subdomain}.craigslist.org/?${_param_string}`)
    } else for (var _cat in search.categories) {
      urls.push(`https://${_subdomain}.craigslist.org/search/${search.categories[_cat].category.tag}/?${_param_string}`)
    }
  }
  return urls;
}










export function getCraigslistScraper(actor: Actor): PlaywrightCrawler {
  return new PlaywrightCrawler({
    maxRequestsPerCrawl: 10,
    headless: false,
    requestHandler: async ({ page, request }) => {
      console.log(`Scraping ${await page.title()} | ${request.url}`);

      const _titles = await page.$$eval(".result-title", (els: any[]) => {
        return els.map((el) => el.textContent);
      });

      const _urls = await page.$$eval(".result-title", (els: any[]) => {
        return els.map((el) => el.getAttribute("href"));
      });

      const _dates = await page.$$eval(".result-date", (els: any[]) => {
        return els.map((el) => el.getAttribute("datetime"));
      });

      try {
        assert.equal(
          _titles.length,
          _urls.length,
          `The number of titles found does not match the number of urls found`
        );
        assert.equal(
          _urls.length,
          _dates.length,
          `The number of titles found does not match the number of urls found`
        );
      } catch (AssertionError) {
        console.warn(`${AssertionError}`);
      }

      var _posts: CraigslistPost[] = [];

      for (var i = 0; i < _titles.length; i++) {
        _posts.push({
          url: _urls[i]!,
          title: _titles[i]!,
          date: _dates[i]!,
        });
      }

      await actor.pushData(_posts);
    },
  });
}
