// This schema defines the structure for the collection to store possible guides. 
// That is, this collection stores guides that have been proposed but not yet approved. 
// From a formatting standpoint, it should be basically the same as the actual guides model, since data will be passed from this to that.  

// Require mongoose
const mongoose = require("mongoose");
// Create Schema class
const Schema = mongoose.Schema;

// Create schema
var GuidePosSchema = new Schema({
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
var GuidePos = mongoose.model("GuidePos", GuidePosSchema);

// Export the model
module.exports = GuidePos;