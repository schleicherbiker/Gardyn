const express = require("express");
const router = express.Router();
// const Note = require("../models/Note.js");
const Article = require("../models/Article.js");
const request = require("request");

// Saves an article to the database
router.get("/articles", function(req, res) {
  Article.find({}, function(err, doc){
    res.json(doc);
  });
});

router.post("/articles", function(req, res) {
  Article.create({
    headline: req.body.headline.main,
    link: req.body.web_url,
    summary: req.body.snippet,
    byLine: req.body.byline.original
  }, function (err, small) {
    if (err) {
      res.send(err)
    } else {
      // saved!
      if (!err) res.sendStatus(200);
    }; 
  })
});

// Saves a note given the corresponding articles ID
router.post("/articles/:id", function(req, res) {
  // Use our Note model to make a new note from the req.body
  var newNote = new Note(req.body);
  // Save the new note to mongoose
  newNote.save(function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Otherwise
    else {
      // Find our user and push the new note id into the User's notes array
      Article.update({_id: req.params.id}, { $push: { "notes": doc._id } }, { new: true }, function(err, newdoc) {
        // Send any errors to the browser
        if (err) {
          res.send(err);
        }
        // Or send the newdoc to the browser
        else {
          res.send(newdoc);
        }
      });
    }
  });
  console.log("Note saved")

});

router.get("/notes/:id/:index", function(req, res) {
  Note.find({_id: req.params.id}, function(err, doc){
    // The index is passed back to account for asynchorous issues in the for loops.
    doc.push(req.params.index);
    console.log("Preparing to return comment");
    console.log(doc[0])
    res.json(doc);
  });
});

// Delete comment from a particular article
router.delete("/notes/:id/:index", function(req, res) {
  console.log("delete comment route hit")
  Article.find({ _id: req.params.id }, function(err, doc){
    if (!err){
      console.log("target article found")
      console.log("Before: " + doc[0].notes);
      console.log("Is array?: " + Array.isArray(doc[0].notes) );
      console.log("Index for slice: " + req.params.index);
      doc[0].notes.splice(req.params.index, 1)
      console.log("After: " +  doc[0].notes );
      Article.update({ _id: req.params.id }, { $set: { notes: doc[0].notes }}, function(error, upRes){
        if (error) {
          res.send(error);
        }
        else {
          res.send(upRes);
        }
      });
    };
  });
  
});

router.delete("/articles/:id/", function(req, res) {
  Article.findByIdAndRemove(req.params.id, (err, todo) => {  
      let response = {
          message: "Todo successfully deleted",
          id: todo._id
      };
      res.status(200).send(response);
  });
});

module.exports = router;