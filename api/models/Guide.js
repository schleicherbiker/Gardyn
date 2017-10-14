/**
 * Gardyn.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 // I'm assuming since we're using Mongoose rather than Sails' default database system this model should be replaced by a Mongoose model. 
 // I'm leaving the original Sails model commented out in case I'm wrong about that. 

/*
module.exports = {

  attributes: {

  }
};
*/

// This schema defines the structure for guides. 
// For now it is simply a title, body and photo. 
// We can add more as time allows as we feel so inclined. 

// Require mongoose
const mongoose = require("mongoose");
// Create Schema class
const Schema = mongoose.Schema;

// Create schema
var PlantSchema = new Schema({
  title: {
    type: String,
    required: true, 
    unique: true
  },
  // In MySQL we'd want to use something other than a string that can better accomodate longer text. 
  // MongoDB appears to just store everything as string types?? 
  // If we have problems with it, I'll do further research.
  body: {
    type: String,
    required: true
  },
  photoLink: {
    type: String,
    required: true
  }
});

// Create the model with the schema
var Plant = mongoose.model("Plant", PlantSchema);

// Export the model
module.exports = Plant;