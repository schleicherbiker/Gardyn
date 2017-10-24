// NOTE: Development version may not run properly on Windows (because of how start script is written)

const express = require("express");
const path = require("path");
const PORT = /*process.env.PORT ||*/ 3001;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use body parser
app.use(bodyParser.json());
app.use(session({
	secret: "team gardyn is here",
	resave: true,
	SaveUnitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

const FACEBOOK_APP_ID = "124126441638491",
	  FACEBOOK_APP_SECRET = "c921158635f1c0a19fb5ed62adf5211e";

const fbAppCredentials = {
	clientID: FACEBOOK_APP_ID,
	clientSecret: FACEBOOK_APP_SECRET,
	callbackURL: "http://localhost:3001/auth/facebook/callback"
};

const fbCallback = function(accessToken, refreshToken, profile, cb){
	console.log(accessToken, refreshToken, profile);
}

passport.use(new FacebookStrategy(fbAppCredentials, fbCallback));

app.route('/')
	.get(passport.authenticate('facebook'));

app.route('/auth/facebook/callback')
	.get(function(req, res){
		res.send("This checks the status of the request. Fingers Crossed");
	});

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/gardynbase");
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