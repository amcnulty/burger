var burgers = require('../models/burger');
var express = require('express');

var router = express.Router();

router.get('/index', function(req, res) {
    burgers.selectAll(function(data) {
        var handlebarsObj = {
            burgers: data
        }
        res.render('index', handlebarsObj);
    });
});

router.post('/api/burgers', function(req, res) {
    burgers.insertOne(req.body.burgerName, function(data) {
        var handlebarsObj = {
            burgers: data
        }
        res.render('index', handlebarsObj);
    });
});

router.put('/api/burgers/:id', function(req, res) {
    var condition = "id = " + req.params.id;
    burgers.updateOne(req.body.burgerName, condition, function(data) {
        var handlebarsObj = {
            burgers: data
        }
        res.render('index', handlebarsObj);
    });
});

module.exports = router;