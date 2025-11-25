// Definition of Node .js
// Node.js is a javascript runtime environment that allows javascript ti run on the server-side.


// Example of a simple node.js .server:
const http = require('http');

// create server
const server = http.createServer((req,res)=>{
    res.end('Hello from Node.js server!');
});

// start server on port 3000
server.listen(3000,()=>{
    console.log('server is running on http://localhost:3000');
});