const express = require( 'express' );
const nunjucks = require('nunjucks')
const db = require('./db.js')
const tb = require('./tweetBank.js')
const bodyParser = require('body-parser')
const app = express();
const routes = require('./routes');

nunjucks.configure('views', { noCache : true});

app.engine('html', nunjucks.render);
app.set('view engine', 'html')

const server = app.listen(3000);
const io = require('socket.io')(server)


app.use(bodyParser.urlencoded({ extended: false }))

app.use( '/', routes(io) );

app.use(express.static('public'))


app.use(function(req,res,next) {
  console.log(req.method, req.originalUrl, res.statusCode)
  console.log(tb.list)
  console.log("Under construction")
  next()
})

app.use('/news/', function(req,res,next) {
  console.log(req.method, req.originalUrl, "welcome to news")
  next()
})
