'use strict';
// We're incorporating an npm package for doing weather searches.
var weather = require("weather-js");

// Creates a UserSearch Constructor
var UserSearch = function(name, location) {
	// This checks to make sure that the new user is a instance of UserSearch
    if (!(this instanceof UserSearch)) {
        return new UserSearch(name, location);
    }
    this.name = name;
    this.location = location;
    this.date = Date.now();
    // This calls the weather-js module and passes through the variables for the function
    this.getWeather = function() {

        weather.find({ search: this.location, degreeType: "F" }, function(err, result) {
            // Returns and error if there is an error in the weather-js function
            if (err) console.log(err);
            // Prints the error to the console
            console.log(JSON.stringify(result, null, 2));
        });

    };

};
// saves the user's search
module.exports = UserSearch;
