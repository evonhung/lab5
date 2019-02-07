var data = require("../data.json");

exports.addFriend = function(request, response) {    
	var nameFriend = request.query.name;
	var descFriend = request.query.description;

	var newFriend = {
		"name": nameFriend,
		"description": descFriend,
		"imageURL": "http://lorempixel.com/400/400/people",
	};

	data.friends.push(newFriend);
		console.log(newFriend);
		response.render("index.handlebars", data);
 };