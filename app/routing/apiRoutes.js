var path = require("path");
var friends = require("../data/friends.js");
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.sendFile(friends);
    });
    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);
    });
    // app.get("/", function(req, res) {
    //     res.json(path.join(__dirname, "index.html"));
    // });
};

  