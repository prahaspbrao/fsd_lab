const http = require('http');

// 1. Create the server
const server = http.createServer((req, res) => {
    
    // 2. Handle Root URL (/)
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Nodejs');
    } 
    // 3. Handle all other routes (404)
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Error: The page you requested does not exist.');
    }
});

// Listen on port 8000
server.listen(8000, () => {
    console.log('Server is listening on port 8000...');
});