var express = require("express");
var app = express();
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});