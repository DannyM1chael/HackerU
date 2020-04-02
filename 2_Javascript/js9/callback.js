/**
 * Create an example of a callback function with multiple parameters
 * and then show it being used
 */

let ftw = function(name) {
    console.log("Depending on the season,", name, "is a good guy");
  };
  let wtf = function(name) {
    console.warn("Depending on the season,", name, "is a bad guy");
  };
  let app = (function() {
    const castiel = { name: "Castiel", isGood: true };
    const crowley = { name: "Crowley", isGood: false };
    //use callback function here
  })();