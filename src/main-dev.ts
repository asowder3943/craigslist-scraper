import { InputSchema } from "./types";
import { validateInput, ApifyInputError } from "./validation.js";

function runTestCases(cases: InputSchema[]) {
  var _i = 1;
  for (var _case in cases) {
    console.info(`Running Test Case ${_i}`);
    try {
      var _testResult = validateInput(cases[_case]);
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
    // all supported location types - Should Pass
    site: ["AUBURN", "roanoke", "charlottesville, 12"],
  },
  {
    // invalid site name
    site: ["invalid_name"],
  },
  {
    // invalid 3rd parameter
    site: ["AUBURN, 12, invalid_3rd_argument"],
  },
  {
    // Invalid distance parameter, out of range
    site: ["AUBURN, -12"],
  },
  {
    // Invalid distance parameter, non float
    site: ["AUBURN, invalid numeric input"],
  },
];

var geoLocationValidationTestCases: InputSchema[] = [
  {
    geoLocation: ["32.609856, -85.480782", "32.609856, -85.480782, 12"],
  },
  {
    geoLocation: ["32.1"],
  },
  {
    geoLocation: ["21, -60, 12, 43"],
  },
  {
    geoLocation: ["-100, -80"],
  },
  {
    geoLocation: ["100, -80"],
  },
  {
    geoLocation: ["32, -200"],
  },
  {
    geoLocation: ["32, 200"],
  },
];

var zipCodeValidationTestCases: InputSchema[] = [
  {
    zipCode: ["22902", "24018, 12"],
  },
  {
    zipCode: ["22.02"],
  },
  {
    zipCode: ["22903, 12, 34"],
  },
  {
    zipCode: ["12"],
  },
  {
    zipCode: ["1290321"],
  },
  {
    zipCode: ["derfr"],
  },
];


var categoryValidationTestCases: InputSchema[] = [
  {
    category: ['RRR', 'ggg']
  },
  {
    category: ['invalid category']
  }
]

runTestCases(categoryValidationTestCases);
