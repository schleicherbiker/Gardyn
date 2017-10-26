const express = require("express");
const router = express.Router();
const Plant = require("../models/Plant.js");
const Guide = require("../models/Guide.js");
const PlantPos = require("../models/PlantPos.js");
const GuidePos = require("../models/GuidePos.js");
const request = require("request");

	// GET /plants
	router.get("/plants", function(req, res) {
	  // Returns all plants where parentLevel is true.
	  Plant.find({parentLevel: true}, function(err, doc){
	    res.json(doc);
	  });
	});

	// GET /guides
	router.get("/guides", function(req, res) {
	  // Returns all guides
	  Guide.find({}, function(err, doc){
	    res.json(doc);
	  });
	});

	// GET /plant/:id
	router.get("/plants/:id", function(req, res) {
	  // Returns a particular plant or category page based on ID
	  Plant.find({_id: req.params.id}, function(err, doc){
	    res.json(doc);
	  });
	});

	// GET /guides/:id
	router.get("/guides/:id", function(req, res) {
	  // Returns a particular guide based on ID
	  Guide.find({_id: req.params.id}, function(err, doc){
	    res.json(doc);
	  });
	});

	// GET /pos_plants
	router.get("/pos_plants", function(req, res) {
	  // Returns all suggested plants
	  PlantPos.find({}, function(err, doc){
	    res.json(doc);
	  });
	});

	// GET /pos_guides
	router.get("/pos_guides", function(req, res) {
	  // Returns all suggested guides
	  GuidePos.find({}, function(err, doc){
	    res.json(doc);
	  });
	});

	// POST /pos_plant
	router.post("/pos_plant", function(req, res) {
	  // Saves a possible plant to the queue for consideration
	  // Currently the full body is passed in. 
	  // Ideally validation should be added. 
	  PlantPos.create(req.body, function (err, small) {
	    if (err) {
	      res.send(err)
	    } else {
	      // saved!
	      if (!err) res.sendStatus(200);
	    }; 
	  })
	});

	// POST /pos_guides
	router.post("/pos_guides", function(req, res) {
	  //Saves a guide to the queue for consideration
	  // Currently the full body is passed in. 
	  // Ideally validation should be added. 
	  GuidePos.create(req.body, function (err, small) {
	    if (err) {
	      res.send(err)
	    } else {
	      // saved!
	      if (!err) res.sendStatus(200);
	    }; 
	  })
	});

	// POST /plant/:id
	router.post("/plant", function(req, res) {
		// Moves a plant with a particular ID from the queue to the actual collection
		// First the ID is used to find the given document in the PlantPos collection. 
		// The object is then saved to the actual plant collection. 
		// This could potentially be handled in a simpler way..
/*		PlantPos.find({_id: "59f12b4b7849e03dd5dabad0"}, function(err, doc){
			console.log(doc[0])

			const allowed = ['title', 'imageURL', 'Climate', 'Sunlight', 'Support', 'Spacing', 'Water', 'Special', 'skillLevel', 'parentLevel'];

			// Filters out properties that are not handled by the new object
			const filteredPlantObj = Object.keys(doc[0])
			  .filter(key => allowed.includes(key))
			  .reduce((obj, key) => {
			    obj[key] = this.state[key];
			    return obj;
			  }, {});*/

		    Plant.create(req.body, function (err, small) {
			    if (err) {
			      res.send(err)
			    } else {
			      // saved!
			      // Now let's delete it from the consideration queue 
		/*	      PlantPos.findByIdAndRemove(req.params.id, (err, todo) => {  
	  				if (!err) res.sendStatus(200);
	  			  });*/
	  			  res.sendStatus(200);
			    }; 
	//		    res.sendStatus(200);
			})
//		});
	});

	// POST /guide/:id
	router.post("/guide/:id", function(req, res) {
		// Moves a guide with a particular ID from the queue to the actual collection
		// First the ID is used to find the given document in the GuidePos collection. 
		// The object is then saved to the actual guide collection. 
		GuidePos.find({_id: req.params.id}, function(err, doc){
		    Guide.create(doc[0], function (err, small) {
			    if (err) {
			      res.send(err)
			    } else {
			      // saved!
			      if (!err) res.sendStatus(200);
			    }; 
			})
		});
	});

	// DELETE /pos_plant/:id
	router.delete("/pos_plant/:id", function(req, res) {
	  // Deletes a plant from the consideration queue
	  PlantPos.findByIdAndRemove(req.params.id, (err, todo) => {  
		  res.sendStatus(200);
	  });
	});

	// DELETE /pos_guide/:id
	router.delete("/pos_guide/:id", function(req, res) {
	  // Deletes a guide from the consideration queue
	  GuidePos.findByIdAndRemove(req.params.id, (err, todo) => {  
	      res.sendStatus(200);
	  });
	});

module.exports = router;