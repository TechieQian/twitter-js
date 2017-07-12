const express = require( 'express' );

const twitterApp = express();

twitterApp.use(function(req,res,next) {
  console.log(req.method, req.originalUrl, res.statusCode)
  next()
})

twitterApp.use('/news/', function(req,res,next) {
  console.log(req.method, req.originalUrl, "welcome to news")
  next()
})


twitterApp.get('/', function (req,res) {
  res.send("hello world 2")
})

twitterApp.get('/news', function(req,res) {
  res.send("another message")
})

twitterApp.listen(3000)
