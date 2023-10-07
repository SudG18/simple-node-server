var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is the Default Page of the Server and its working fine. If You have not specified anything or a Address, this page should be visible. Jenkins pipeline creation on 10/05!!</p></body></html>');
        res.write('<html><body><p> I tried creating a new branch,but the chages were not displayed!!</p></body></html>')
        res.end();

    }
    else if (req.url == "/home") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is Home Page. Hello All And Good Morning. This page was added by AWS Code Pipeline. </p></body></html>');
        res.end();

    }
    else if (req.url == "/dashboard") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is Dashboard Page. Hello All And Good Morning.</p></body></html>');
        res.end();
    }
    else if (req.url == "/error") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is Error Page. Hello All And Good Morning.</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');
});

server.listen(5000);
console.log('Node.js web server at port 5000 is running..')
