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

// Require mongoose
const mongoose = require("mongoose");
// Create Schema class
const Schema = mongoose.Schema;

// Create schema
var PlantSchema = new Schema({
  headline: {
    type: String,
    required: true, 
    unique: true
  },
  link: {
    type: String,
    required: true
  },
  summary: {
    type: String
  }, 
  byLine: {
    type: String
  },
});

// Create the model with the schema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;