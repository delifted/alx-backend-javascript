const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
// Create HTTP server
const app = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Set the response body
  res.write('Hello Holberton School!');

  // End the response
  res.end();
});

// Set the server to liste on port 1245
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Export the app variable
module.exports = app;
