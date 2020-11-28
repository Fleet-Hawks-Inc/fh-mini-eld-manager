var ffi = require("ffi");
var ref = require("ref");
var int = ref.types.int;

var platform = process.platform;
var fhObd2Lib = null;

if (platform === "linux") {
  fhObd2Lib = "./binaries/libOBD2.so";
} else {
  throw new Error("unsupported platform for " + platform);
}

var fhObd2 = ffi.Library(fhObd2Lib, {
  /**GPS Related API's  -----Start-------*/

  gps_init: [int], // Initialize GPS - > Return GPS file descriptor
  agps_init: [int], // This function initializes AGPS. - >This API fetches latest xtradata from the server. So this function may take some time  
});

module.exports = fhObd2;
