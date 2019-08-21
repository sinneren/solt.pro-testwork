'use strict';

const path = require('path');
const app = require('express')();

const port = process.env.PORT || 8080;

app.use('/', express.static(path.join(__dirname, 'build/index.html')));

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});