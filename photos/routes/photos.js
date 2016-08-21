/**
 * This file will contain the data for our photos application
 **/

// Photo upload dependencies
var Photos = require('../models/Photos');
var path = require('path');
var fs = require('fs');
var join = path.join;

/**
 * This method will render out the images
 *
 * @param req - The request object
 * @param res - The response object
 */
exports.list = function(req, res, next) {
    // Use the mongoose to find all the images in the models
    Photos.find(
        {}, // Find all images
        function(err, photos) {

            // Check for error
            if (err) {
                return next(err);
            }

            // Render the images gallery
            res.render('photos', {
                title: 'Photos',
                photos: photos
            });
        });
};

