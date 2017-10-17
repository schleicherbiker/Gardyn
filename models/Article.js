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
