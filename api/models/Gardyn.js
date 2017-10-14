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

// Create article schema
var ArticleSchema = new Schema({
  // title is a required string
  headline: {
    type: String,
    required: true, 
    unique: true
  },
  // link is a required string
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

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;