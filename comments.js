// Create web server application that can respond to requests for comments
// from the comments.json file.
// 1. Load the comments.json file
// 2. Create a web server
// 3. Respond to requests for comments

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    fs.readFile('./comments.json', (err, data) => {
        if (err) {
            console.log(err);
        }
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});