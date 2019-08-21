var express = require('express');
var path = require('path');

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
var app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(server_port, server_host, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening on port %d', server_port);
    }
});