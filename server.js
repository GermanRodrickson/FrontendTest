'use strict';

const http = require('http');
const fs = require('fs')

function onRequest (resquest, response) {
  response.writeHead(200, {'Context-Type' : 'text/html'});
  fs.readFile('./index.html', null, function (error, data) {
    if(error) {
      response.writeHead(404);
      response.write('Not found!')
    } else {
      response.write(data)
    }
    response.end();
  })
};

http.createServer(onRequest).listen(1337);
