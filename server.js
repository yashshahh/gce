var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();
const port = process.env.PORT || 443;

var privateKey  = fs.readFileSync('sslcert/example.key');
var certificate = fs.readFileSync('sslcert/example.crt');
var credentials = {key: privateKey, cert: certificate};

var server = https.createServer(credentials, app);

app.get('/', (req, res) => { res.send('This is a secure server') });

server.listen(port, () => console.log(`Server listening at port ${port}`));