//
// This is our photos static data
//

// Init the photos array
var photos = [];

// Add images to the array.
// Each photo has its name and path (it can be local images or url from the internet)
photos.push({
    name: 'Event Loop (png)',
    path: 'eventLoop.png'
});
photos.push({
    name: 'Express (jpg)',
    path: 'express.jpg'
});

/**
 * This method will render out the images
 *
 * @param req - The request object
 * @param res - The response object
 */
exports.list = function(req, res) {

    // Render the views/photos page
    res.render('photos', {
            title: 'Photos',
            photos: photos
        }
    )
};
