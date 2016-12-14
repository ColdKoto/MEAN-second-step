const express  = require('express'),
      bp       = require('body-parser'),
      app      = express();

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

app.listen(8000, function(){
    console.log('listening on 8000');
})
