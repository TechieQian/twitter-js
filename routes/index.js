const express = require('express');
const router = express.Router();
const tb = require('../tweetBank')

router.get('/',function(req, res) {
  console.log("hitting tweets")
//  console.log(io)
  var tweets = tb.list()
  res.render('index', { tweets : tweets, showForm : true })
})

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tb.find( {name: name} );
  console.log("tweet find is" , list)
  res.render( 'index', { tweets: list , showForm : true, name : name});
});

router.get('/tweets/:id', function(req, res) {
  var id = parseInt(req.params.id);
  var list = tb.find( {id : id})
  res.render('index', { tweets : list })
})

/*
router.post('/tweets', function(req, res) {
  console.log("body is", req.body)
  io.socket.emit('news', { hello: 'world' });
  tb.add(req.body.name, req.body.text)

  res.redirect('/')
})
*/

module.exports = function (io) {

  router.post('/tweets', function(req, res) {
    console.log("body is", req.body)

    io.emit('newTweet', { name: 'qian', text: 'hi' });
    tb.add(req.body.name, req.body.text)

  })

  return router;
};
