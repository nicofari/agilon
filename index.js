var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var agilonWeek = require(__dirname + '/libs/AgilonWeek.js');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    var currDriver = agilonWeek.getDriverAtDate(new Date());
    var nextDriver = agilonWeek.getNextDriver(currDriver);
    response.render('pages/index', {
        currDriver: currDriver,
        nextDriver: nextDriver
    });
});

app.get('/cool', function (request, response) {
    response.send(cool());
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
