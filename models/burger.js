var orm = require('../config/orm');

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function(value, cb) {
        orm.insertOne('burgers', 'burger_name', value, function(results) {
            cb(results);
        });
    },
    updateOne: function(columnVal, condition, cb) {
        orm.updateOne('burgers', columnVal, condition, function(results) {
            cb(results);
        })
    }
}

module.exports = burger;