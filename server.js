const express = require('express');
const app = express();
const path = require('path');

const defaultStaticFolder = '/dist';
const defaultListeningPort = 8080;

app.use(express.static(__dirname + defaultStaticFolder));// Start the app by listening on the default
console.log('Express middleware function serving static files at "' +
  __dirname + defaultStaticFolder + '".');
console.log('Middleware function mounted.');
/**
 * @see {@link }
 */
// Heroku port
app.listen(process.env.PORT || defaultListeningPort);
console.log('HTTP server bound and listening for connections on host/port "' +
(process.env.PORT || defaultListeningPort.toString()) + '".');
console.log('View web app by opening URL http://localhost:' +
(process.env.PORT || defaultListeningPort.toString()) + ' in your web browser.');

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/angular-heroku/index.html'));
});