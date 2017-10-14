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

// This schema defines the structure for data stored in the plant collection. 
// The plant collection stores data for both plant detail pages as well as plant category pages. 
// This model therefore includes definitions for all categories for both types but does not require them. 
// Simply pass in the relevant values for what you're defining.

// Require mongoose
const mongoose = require("mongoose");
// Create Schema class
const Schema = mongoose.Schema;

// Create schema
var PlantSchema = new Schema({
  // The only required value is the title. 
  // It should be used both for plant detail information and category information. 
  title: {
    type: String,
    required: true, 
    unique: true
  },
  // Again, it is my understanding that MongoDB stores longer text as still just strings as opposed to text blobs. 
  // I'm not completly confident about that, however, so if we have problems I'll do more research. 
  description: {
    type: String
  },
  // Bullets are stored as an array of strings.
  bullets: {
    type: Array
  }, 
  // Enum part of this model has not been tested yet.
  skillLevel: {
    type: String,
    enum: ["Easy", "Intermediate", "Difficult"]
  },

  // Fields below this point are related to category objects rather than plant detail pages

  // Child plants should recieve an array. 
  // The array should store MongoDB IDs (from this table) of each child plant in the given category.
  childPlants: {
    type: Array
  } 
});

// Create the model with the schema
var Plant = mongoose.model("Plant", PlantSchema);

// Export the model
module.exports = Plant;