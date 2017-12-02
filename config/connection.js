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

connection.query('SET @@auto_increment_increment=1;');

connection.query('INSERT INTO burgers(burger_name)VALUES("Crabby Patty");');

connection.query('INSERT INTO burgers(burger_name)VALUES("Krusty Burger");');

connection.query('INSERT INTO burgers(burger_name)VALUES("Honker Burger");');


connection.on('error', function (err) {
    console.log('db error', err);
    // if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
    //     handleDisconnect();                         // lost due to either server restart, or a
    // } else {                                      // connnection idle timeout (the wait_timeout
    //     throw err;                                  // server variable configures this)
    // }
});

module.exports = connection;