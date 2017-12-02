var connection = require('../config/connection');

var orm = {
    selectAll: function(table, cb) {
        connection.query("SELECT * FROM ??", table, function(err, results) {
            if (err) throw err;
            cb(results);
        })
    },
    insertOne: function(table, column, value, cb) {
        var queryString = "INSERT INTO " + table + "(" + column + ")" + " VALUES('" + value + "');";
        connection.query(queryString, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    },
    updateOne: function(table, columnVal, condition, cb) {
        var queryString = "UPDATE " + table + " SET devoured = " + columnVal + " WHERE " + condition + ";";
        connection.query(queryString, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    }
}

module.exports = orm;