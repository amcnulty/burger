const mysql = require('mysql');

const configVars = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};

var connection = mysql.createConnection(configVars);

connection.connect();

setInterval(function() {
    connection.ping();
}, 3000);

function handleDisconnect(myConnection) {
    myConnection.on('error', function(err) {
        console.log(err);
        connection.destroy();
        setTimeout(function() {
            connection = mysql.createConnection(configVars);
            handleDisconnect(connection);
            connection.connect();
            setIncrement();
        }, 1000);
    })
}

function setIncrement() {
    connection.query("SET @@auto_increment_increment=1;", function(err, results) {
        if (err) throw err;
        console.log(results);
    });
}

handleDisconnect(connection);

setIncrement();

module.exports = connection;