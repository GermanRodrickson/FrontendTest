'use strict';

const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + "/index.html");
});

app.listen(1337, () => {
  console.log('Listening on port 1337!');
});