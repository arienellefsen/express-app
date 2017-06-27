var express = require('express');
var app = express();
var birds = require('./routes/birds');
app.use(express.static('public'));
var port = process.env.port || 3000;

app.use('/birds', birds);

app.listen(port, function() {
    console.log("App listening on PORT " + port);

});