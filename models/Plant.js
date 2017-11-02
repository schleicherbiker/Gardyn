// This schema defines the structure for data stored in the plant collection. 
// The plant collection stores data for both plant detail pages as well as plant category pages. 
// This model therefore includes definitions for all categories for both types but does not require them. 
// Simply pass in the relevant values for what you're defining.

// I'm being liberal on leaving categories in this model for now, but when we get further along we should refactor it based on what we're actually using. 

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
  imageURL:{
    type: 'string'
  },
  climate:{
    type: 'string'
  },
  sunlight:{
    type: 'string'
  },
  support:{
    type: 'string'
  },
  spacing:{
    type: 'string'
  },
  special:{
    type: Array
  },
  // Again, it is my understanding that MongoDB stores longer text as still just strings as opposed to text blobs. 
  // I'm not completly confident about that, however, so if we have problems I'll do more research. 

  // Enum part of this model has not been tested yet.
  // 'Easy' and 'Difficult' are legacy and can be removed before going to production version. 
  difficulty: {
    type: String,
    enum: ["beginner", "intermediate", "expert"]
  },
  growingPeriod: {
    type: String
  },
  parentLevel: {
    type: Boolean,
  },
  parentCat: {
    type: String,
  },

  // Fields below this point are related to category objects rather than plant detail pages

  // Child plants should recieve an array. 
  // The array should store MongoDB IDs (from this table) of each child plant in the given category.
  // Actually using plant names instead, since IDs will not be known prior to seeding. 
  // Can be updated later if IDs work better. 
  childPlants: {
    type: Array
  },
  isCat: {
    type: Boolean,
  } 
});

// Create the model with the schema
var Plant = mongoose.model("Plant", PlantSchema);

// Export the model
module.exports = Plant;