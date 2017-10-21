// This schema defines the structure for guides. 
// For now it is simply a title, body and photo. 
// We can add more as time allows as we feel so inclined. 

// Require mongoose
const mongoose = require("mongoose");
// Create Schema class
const Schema = mongoose.Schema;

// Create schema
var GuideSchema = new Schema({
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
var Guide = mongoose.model("Guide", GuideSchema);

// Export the model
module.exports = Guide;