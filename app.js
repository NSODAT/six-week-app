const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const corsOptions = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS,DELETE'
};

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', cors(corsOptions), (req, res) => {
    res.send('hello!');
});

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
}, app);

sslServer.listen(PORT, () => console.log(`Secure server on port ${PORT}`));