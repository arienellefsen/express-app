var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

var path = require('path');


// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     next();
// });

var cities = {
    'Lotopia': 'Rough and mountainous',
    'Caspiana': 'Sky-top island',
    'Indigo': 'Vibrant and thriving',
    'Paradise': 'Lush, green plantation',
    'Flotilla': 'Bustling urban oasis'
};
var states = {}
    //creating a chainable route handlers for a route path
router.route('/')
    .get(function(req, res) {
        res.json(cities);
    })
    .post(function(req, res) {
        res.send('Add a bird');
    })

.delete(function(req, res) {
    res.send('Delete a bird');
});

router.route('/reserve')
    .get(function(req, res) {
        res.sendFile(path.join(__dirname, "views/reserve.html"));
    });

router.route('/about')
    .get(function(req, res) {
        res.send('about funny birds');
    });
//There is a special routing method, app.all(), which is not derived from any HTTP method
router.route('/:name')
    .all(function(req, res, next) {
        console.log('Accessing the secret section ...' + req.params.name);
        res.send('secret: ' + req.params.name);
    });
module.exports = router;