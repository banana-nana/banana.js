const log = require('./modules/log.js')
const fs = require("fs")


  // Vars and Stuff

  var verison = "v1.1.0"
  var CODEHOLDER = "sillyangel"


log(`Bananajs ${verison}, made by ${CODEHOLDER}`) ;


function Banana(string) {
  if (string === "ver") {
      return log(`Banana.js, ${verison}, made by ${CODEHOLDER}`)
  }
  if (string === "Help") {
    return log("Check out https://docs.banana-corp.tk")
  }
}

module.exports = Banana;