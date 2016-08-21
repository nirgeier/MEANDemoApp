//
// Create the mongooseDB Model
//
// Mongoose provides all the CRUD methods :
//    Photo.create
//    Photo.update
//    Photo.remove
//    Photo.find
//
//  on the model.
var mongoose = require('mongoose');
var assert = require('assert');
var path = require('path');
var colors = require('colors/safe');

// Set up connection to mongodb on localhost and use photo_app as  database
var db = mongoose.connect('mongodb://127.0.0.1/photo_app',
    function(err) {
        err ?
            console.log(colors.red.inverse("\n\n" +
                "----------------------------------------\n" +
                "   Error Connecting to mongodb database.\n" +
                "   Verify that the mongod is running.\n" +
                "----------------------------------------\n"))
            : console.log(colors.green("\nConnected to local mongoDB."));

    });

// Define the Photos schema
var schema = new mongoose.Schema({
    name: String,
    path: String
});

// Export the model
var Model = mongoose.model('Photo', schema);
module.exports = Model;

// Clear all previous data
Model.remove({}, function(err) {
    console.log(colors.green('Database cleared'));
});

// Add images to the array.
// Each photo has its name and path (it can be local images or url from the internet)
new Model({
    name: 'Event Loop (png)',
    path: 'eventLoop.png'
}).save();

new Model({
    name: 'Express (jpg)',
    path: 'express.jpg'
}).save();
