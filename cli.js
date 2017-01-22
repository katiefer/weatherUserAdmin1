//Global variables including dependencies.
var inquirer = require("inquirer");
var weather = require("weather-js");
var WeatherAdmin = require("./WeatherAdmin");
var moment = require("moment");
var fs = require("fs");
//This will capture user input. First section specifically determines who is using app.
var MyAdmin = new WeatherAdmin();

inquirer.prompt([
	{
		type: "list",
		name: "user",
		message: "Are you a User or an Admin?",
		choices: ["User", "Admin"]
	}
	]).then(function(info) { //Takes input and filters which type of info should be returned.
		var userType = info.user;
		if (userType === "User") { //A "User" is expected to put in their name and query city.
			inquirer.prompt([
				{
					type: "input",
					name: "named",
					message: "What is your name?"
				},
				{
					type: "input",
					name: "city",
					message: "Which city do you want to search?"
				}
			]).then(function(response) { //Logs variables to be used by UserSearch.js
				var userName = response.named;
				var citySearch = response.city;
				var rightNow = moment().format("MMM Do YY");
				//Then run the weather app based on city name.
				var detailObj = { //Object which will be pulled by UserSearch.js
					userName,
					citySearch,
				}
				var userArray = [userName + ", " + citySearch + ", " + rightNow];
				fs.appendFile("log.txt", "\n" + userArray); //Above array will be logged in log.txt
				MyAdmin.newUserSearch(userName, citySearch);
			});
		} else {
			inquirer.prompt([ //When user is "Admin"
				{
					type: "input",
					name: "password",
					message: "What's the password?"
				}
			]).then(function(response) { //If password is matched, it will print info stored on log.txt
				var password = response.password;
				if (password === "password1234") {
					fs.readFile("log.txt", "utf8", function(err, data) {
						console.log(data);
						MyAdmin.getData();
					});
				}
			});
		}
	});
//Allowing detailObj to be read by other files
// module.exports = detailObj;