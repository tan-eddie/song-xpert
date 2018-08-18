const express = require('express');
const path = require('path');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

// Host the Angular client
app.use(express.static(path.join(__dirname, '/../client/song-xpert-web/dist/song-xpert-web')));

app.post('/guess', function (req, res) {
  // Respond to guess with correct/incorrect
  res.send('true')
});

// Default route to Angular web client
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/song-xpert-web/dist/song-xpert-web/index.html'));
});

app.set('port', port);
const server = http.createServer(app);
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});