const [{ Server: h1 }, x] = [require('http'), require('express'), require('body-parser')];

const indexRouter = require('./index');

const mw0 = (r, rs, n) => rs.status(200).set(hu) && n();
const Router = x.Router();
const PORT = 4321;
const { log } = console;
const hu = { 
    'Content-Type': 'text/html; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS,DELETE'
};

const app = x();

Router
  .route('/')
  .get(r => r.res.end('Привет мир!'));
app
  .use(mw0)
  .use('/', indexRouter(x))
  .use((req, res, next) => { req.errorMessage = 'akrill9003'; next(); })
  .use(r => r.res.status(404).set(hu).send(r.errorMessage))
  .use((e, r, rs, n) => rs.status(500).set(hu).send(`Ошибка: ${e}`))
  .set('x-powered-by', false);
module.exports = h1(app)
  .listen(PORT, () => console.log(`Secure server on port ${PORT}`));