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
    site: ["AUBURN", "roanoke", "charlottesville"],
  },
  {
    site: ["invalid_name"],
  }
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

var queryValidationTestCases: InputSchema[] = [
  {
    query: ['programmer', 'software & developer', 'software & engineer']
  },
  {
    query: []
  },
  {
    query: ['']
  },
  {
    query: ['"SpecficText"']
  },
  {
    query: ['WildC*rd']
  },
  {
    query: ['bike -kids']
  }
]

var comboValidationTestCases: InputSchema[] = [
  {
    site: ["AUBURN", "roanoke", "charlottesville"],
    geoLocation: ["32.609856, -85.480782", "32.609856, -85.480782, 12"],
    zipCode: ["22902", "24018, 12"],
    category: ['RRR', 'ggg'],
    query: ['programmer', 'software & developer', 'software & engineer']
  }
]

runTestCases(siteValidationTestCases);
runTestCases(geoLocationValidationTestCases);
runTestCases(zipCodeValidationTestCases);
runTestCases(categoryValidationTestCases);
runTestCases(queryValidationTestCases);
runTestCases(comboValidationTestCases);
