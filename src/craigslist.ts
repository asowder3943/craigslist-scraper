import { CraigslistLocations } from "./location.js";
import { CraigslistCategories } from "./category.js";
import { strict as assert } from "assert";

export type CraigslistSearchInput = {
  location?: string[] | undefined;
  category?: string[] | undefined;
  query?: string[] | undefined;
};

export function validateSearchInput(input: CraigslistSearchInput) {
  var _locations: string[] =
    input.location ?? CraigslistLocations.map((x) => x.url_part);
  var _categories: string[] = input.category ?? ["sss"];


  for (var _loc in _locations) {
    assert(
      CraigslistLocations.filter((e) => _locations[_loc] === e.url_part)
        .length > 0,
      "At least one of the provided locations does not match supported locations see <Not Implemented> for details."
    );
  }
  for (var _cat in _categories) {
    assert(
      CraigslistCategories.filter((e) => _categories[_cat] === e.url_part)
        .length > 0,
      "At least one of the provided categories does not match supported locations see <Not Implemented> for details."
    );
  }
}

export function buildRequestUrls(input: CraigslistSearchInput): string[] {
  validateSearchInput(input);
  var _locations: string[] =
    input.location ?? CraigslistLocations.map((x) => x.url_part);
  var _categories: string[] = input.category ?? ["sss"];
  var _queries: string[] = input.query ?? [];
  var _query_string = '?query=';

  for(var i = 0; i < _queries.length; i++){
    if (_queries.length == 0){
        _query_string = ''
    }
    else if (i == _queries.length - 1){
        _query_string += _queries[i]
    }
    else {
        _query_string += _queries[i] + '+%7C+'
    }
  }
  var urls: string[] = []
  for(var _loc in _locations){
    for(var _cat in _categories){
        urls.push(`https://${_locations[_loc]}.craigslist.org/search/${_categories[_cat]}${_query_string}`)
    }
  }
  return urls;
}
