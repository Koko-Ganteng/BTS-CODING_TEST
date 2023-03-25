var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const https = require('https')
const fs = require('fs')

// swagger configuration
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = {
  openapi: '3.0.0',
  basePath: '/',
  info: {
    title: 'BTS.ID CODING TEST API',
    version: '0.1.13',
    description:
      'This is a REST API application made with BTS',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    }
  },
};
const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*'],
};
const setOptions = {
  customCss: '.swagger-ui .topbar { display: none; }'
}
const swaggerSpec = swaggerJSDoc(options);

var check = require('./routes/check');
var checkItem = require('./routes/checkItem');


var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/check', check);
app.use('/checkItem', checkItem);

app.use('/', swaggerUi.serve,  swaggerUi.setup(swaggerSpec, setOptions))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:7000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err)
  return res.send(err)
  // res.render('error');
});

const certConfig = {
  key: fs.readFileSync('keys/key.pem'),
  cert: fs.readFileSync('keys/cert.pem')
}
const PORT = process.env.PORT || 8444
https.createServer(certConfig, app).listen(PORT, console.log(`server runs on port ${PORT}`))

module.exports = app;
