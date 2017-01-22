'use strict';
// We're incorporating an npm package for doing weather searches.
var weather = require("weather-js");

// Creates a UserSearch Constructor
var UserSearch = function(userName, citySearch) {
	// This checks to make sure that the new user is a instance of UserSearch
    if (!(this instanceof UserSearch)) {
        return new UserSearch(userName, citySearch);
    }
    this.userName = userName;
    this.citySearch = citySearch;
    this.date = Date.now();
    // This calls the weather-js module and passes through the variables for the function
    this.getWeather = function() {

        weather.find({ search: this.citySearch, degreeType: "F" }, function(err, result) {
            // Returns and error if there is an error in the weather-js function
            if (err) console.log(err);
            // Prints the error to the console
            console.log(JSON.stringify(result, null, 2));
        });

    };

};
// saves the user's search
module.exports = UserSearch;
