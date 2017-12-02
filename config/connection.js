const mysql = require('mysql');

if (process.env.NODE_ENV === 'development') {
    var connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "burgers_db"
    });
}
else {
    var connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });
}

connection.connect();

connection.query("SET @@auto_increment_increment=1;", function(err, results) {
    if (err) throw err;
    console.log(results);
});

module.exports = connection;