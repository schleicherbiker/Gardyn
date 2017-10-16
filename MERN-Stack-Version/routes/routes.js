const express = require("express");
const router = express.Router();
// const Note = require("../models/Note.js");
// const Article = require("../models/Article.js");
const request = require("request");

	// GET /plants
		// Returns all plants where parent-level is true.

	// GET /guides
		// Returns all guides

	// GET /plant/:id
		// Returns a particular plant or category page based on ID

	// GET /guides/:id
		// Returns a particular guide based on ID

	// POST /pos_plant
		// Saves a possible plant to the queue for consideration

	// POST /pos_guides
		//Saves a guide to the queue for consideration

	// POST /plant/:id
		// Moves a plant with a particular ID from the queue to the actual collection

	// POST /guide/:id
		// Moves a guide with a particular ID from the queue to the actual collection

	// DELETE /pos_plant/:id
		// Deletes a plant from the consideration queue

	// DELETE /pos_guide/:id
		// Deletes a guide from the consideration queue


module.exports = router;