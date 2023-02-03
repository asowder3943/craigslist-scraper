/**
 * A series of Test cases meant to verify functionality across all supported search parameters
 */

import { InputSchema } from './types.js';
import { ApifyInputError, getRequestUrlsFromInput } from './validation.js';

function runTestCases(cases: InputSchema[]) {
  var _i = 1;
  for (var _case in cases) {
    console.info(`Running Test Case ${_i}`);
    try {
      var _testResult = getRequestUrlsFromInput(cases[_case]);
      console.log(_testResult);
    } catch (e) {
      if (e instanceof ApifyInputError) {
        console.warn(`Test Case Failure: \n${e}`);
      } else {
        console.warn(`Unexpected Error: \n${e}`);
      }
    }
    console.info(`\n\n\n`);
    _i++;
  }
}

var siteValidationTestCases: InputSchema[] = [
  {
    site: ['AUBURN', 'roanoke', 'charlottesville'],
  },
  {
    site: ['invalid_name'],
  },
];

var geoLocationValidationTestCases: InputSchema[] = [
  {
    geoLocation: ['32.609856, -85.480782', '32.609856, -85.480782, 12'],
  },
  {
    geoLocation: ['32.1'],
  },
  {
    geoLocation: ['21, -60, 12, 43'],
  },
  {
    geoLocation: ['-100, -80'],
  },
  {
    geoLocation: ['100, -80'],
  },
  {
    geoLocation: ['32, -200'],
  },
  {
    geoLocation: ['32, 200'],
  },
];

var zipCodeValidationTestCases: InputSchema[] = [
  {
    zipCode: ['22902', '24018, 12'],
  },
  {
    zipCode: ['22.02'],
  },
  {
    zipCode: ['22903, 12, 34'],
  },
  {
    zipCode: ['12'],
  },
  {
    zipCode: ['1290321'],
  },
  {
    zipCode: ['derfr'],
  },
];

var categoryValidationTestCases: InputSchema[] = [
  {
    category: ['RRR', 'ggg'],
  },
  {
    category: ['invalid category'],
  },
];

var queryValidationTestCases: InputSchema[] = [
  {
    query: ['programmer', 'software & developer', 'software & engineer'],
  },
  {
    query: [],
  },
  {
    query: [''],
  },
  {
    query: [' ', '   '],
  },
  {
    query: ['"SpecficText"'],
  },
  {
    query: ['WildC*rd'],
  },
  {
    query: ['bike -kids'],
  },
  {
    query: [
      'programmer',
      'software & developer',
      'software & engineer',
      'coding',
      'java',
      'python',
      'excel',
      'vba',
    ],
  },
];

var comboValidationTestCases: InputSchema[] = [
  {
    site: ['AUBURN', 'roanoke', 'charlottesville'],
    geoLocation: ['32.609856, -85.480782', '32.609856, -85.480782, 12'],
    zipCode: ['22902', '24018, 12'],
    category: ['RRR', 'ggg'],
    query: ['programmer', 'software & developer', 'software & engineer'],
    urls: [
      'https://charlottesville.craigslist.org/search/msa?query=guitar&min_price=&max_price=100',
    ],
  },
];

var realWorld: InputSchema[] = [
  {
    category: ['ggg'],
  },
];

var issue2022121001: InputSchema[] = [
  {
    category: ['sss'],
    maxPagesPerCrawl: 1,
    proxyConfiguration: {
      useApifyProxy: true,
      apifyProxyCountry: 'US',
    },
    proxyRotation: 'UNTIL_FAILURE',
    query: ['computer'],
    zipCode: ['22902'],
    maxRequestRetries: 3,
    maxConcurrency: 50,
  },
];

runTestCases(geoLocationValidationTestCases);
runTestCases(zipCodeValidationTestCases);
runTestCases(categoryValidationTestCases);
runTestCases(queryValidationTestCases);
runTestCases(comboValidationTestCases);
runTestCases(issue2022121001);
