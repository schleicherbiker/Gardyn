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

// This schema defines the structure for the collection to store possible plants. 
// That is, this collection stores plants that have been proposed but not yet approved. 
// From a formatting standpoint, it should be basically the same as the actual plants model, since data will be passed from this to that.  
// Our current outline does not allow users to propose new categories and therefore the childPlants field is not required. 
// I left it in, however, in case we want to add that feature in the future. 

// Require mongoose
const mongoose = require("mongoose");
// Create Schema class
const Schema = mongoose.Schema;

// Create schema
var PlantPosSchema = new Schema({
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
var PlantPos = mongoose.model("PlantPos", PlantPosSchema);

// Export the model
module.exports = PlantPos;