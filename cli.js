var inquirer = require("inquirer");
var weather = require("weather-js");
var weatherFile = require("./weather.js");


inquirer.prompt([
	{
		type: "list",
		name: "user",
		message: "Are you a User or an Admin?",
		choices: ["User", "Admin"]
	}
	]).then(function(info) {
		var userType = info.user;
		if (userType === "User") {
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
			]).then(function(response) {
				var userName = response.named;
				var citySearch = response.city;
				//Then run the weather app based on city name.
				var userArray = [userName, citySearch, moment().format("MMM Do YY")];
				fs.appendFile("log.txt", "\n" + userArray);
			});
		} else {
			inquirer.prompt([
				{
					type: "input",
					name: "password",
					message: "What's the password?"
				}
			]).then(function(response) {
				var password = response.password;
				if (password === "password1234") {
					fs.readFile("log.txt", "utf8", function(err, data) {
						console.log(data);
					});
				}
			});
		}
	});