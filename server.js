const express = require("express");
const path = require("path");
const PORT = /*process.env.PORT ||*/ 3001; // Uncomment process.env before deploying.
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Database configuration with mongoose
mongoose.connect("mongodb://gardyn_admin:richsoil@ds237855.mlab.com:37855/heroku_htkwql1k"); // For production version use: mongodb://gardyn_admin:richsoil@ds237855.mlab.com:37855/heroku_htkwql1k      For development use: mongodb://localhost/gardynbase
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// ROUTES
const routes = require("./routes/routes.js");
app.use("/api", routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
	const index = path.join(__dirname, 'client', 'build', 'index.html');
  	res.sendFile(index);
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
