import {CRAIGSLIST_SITES} from "./consts.js";
import {InputSchema} from "./types"
import {validateInput, ApifyInputError} from "./validation.js"


var siteValidationTestCases: InputSchema[] = [
  {
    // Trivial Case - Should fail when no input provided
  },
  {
    // all supported location types - Should Pass
    site: ['AUBURN', 'roanoke', 'charlottesville, 12']
  },
  {
    // invalid site name
    site: ['invalid_name']
  },
  {
    // invalid 3rd parameter
    site: ['AUBURN, 12, invalid_3rd_argument']
  },
  {
    // Invalid distance parameter, out of range
    site: ['AUBURN, -12'] 
  },
  {
    // Invalid distance parameter, non float
    site: ['AUBURN, invalid numeric input'] 
  }
]

function runTestCases(cases: InputSchema[]){
  var _i = 1
  for (var _case in cases){
    console.info(`Running Test Case ${_i}`)
    try{
      var _testResult = validateInput(cases[_case])
      console.log(_testResult)
    } catch (e) {
      if (e instanceof ApifyInputError){
        console.warn(`Test Case Failure: \n${e}`)
      } else{
        console.warn(`Unexpected Error: \n${e}`)
      }
    }
    console.info(`\n\n\n`)
    _i ++;
  }
}

runTestCases(siteValidationTestCases)