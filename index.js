module.exports = x => {
    const router = x.Router();
    const bodyParser = require('body-parser');

    router
    .use(function workingSetter(req, res, next) {req.working = 'Working!'; next();})
    .use(x.static('.'))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use('/login', (req, res) => {
        res.send('akrill9003')
    })
    .use('/code', (req, res) => {
        res.send('boom')
    })

    return router;
}
