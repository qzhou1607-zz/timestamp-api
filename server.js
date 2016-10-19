var express = require('express');
var path = require('path');
var app = express();
var moment = require('moment');
var port = process.env.PORT;
app.use('/', express.static(path.join(__dirname,'public')));
app.get('/:date',function(req,res) {
    var date = req.params.date;
    var response = {};
    response.unix = moment(date).isValid() ? moment(date).format('X') : null;
    response.natural = moment(date).isValid() ? moment(date).format('MMMM D,Y') : null;
    res.json(response);
    res.end();
});
app.listen(port);