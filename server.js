var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var path = require('path');
var app = express();
var db = require("./models");


app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
    extended: false
}));
var PORT = process.env.PORT || 3000;

app.use(methodOverride('_method'))
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/routes.js');
app.use('/', routes);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

