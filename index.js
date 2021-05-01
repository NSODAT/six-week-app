module.exports = x => {
    const router = x.Router();
    const bodyParser = require('body-parser');
    const fs = require('fs');
    const crypto = require('crypto');
    const http = require('http')
    

    router
    .use(function workingSetter(req, res, next) {req.working = 'Working!'; next();})
    .use(x.static('.'))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .all('/req/', (req, res) => {
        const addr = req.method === 'POST' ? req.body.addr : req.query.addr;

        http.get(addr, (r, b = '') => {
            r
            .on('data', d => b += d)
            .on('end', () => res.send(b));
        });
    })
    .use('/login', (req, res) => {
        res.send('akrill9003')
    })
    .use('/code', (req, res) => {
        const fileContent = fs.readFileSync("app.js", "utf-8");
        res.send(fileContent);
    })
    .use('/sha1', (req, res) => {
        const input = req.url.substring(1 + req.url.indexOf(':'));
        const hash = crypto.createHash('sha1').update(input).digest('hex');
        res.send(hash);
    })

    return router;
}
