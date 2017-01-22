
var fs= require("fs");
var UserSearch = require("./UserSearch");

var WeatherAdmin = function(){
	this.getData = function(){
	fs.readFile("./log.txt", "utf8", function(err, data){
			if (err) {
				console.log(err);
			}else {
			console.log(data);
			}
		});
	};

	this.newUserSearch = function(userName, citySearch) {
		var newUserSearch = new UserSearch(userName, citySearch);
		newUserSearch.getWeather();
	};
};
module.exports = WeatherAdmin;