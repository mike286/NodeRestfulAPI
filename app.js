var express = require('express');
mongoose = require('mongoose');
bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');
//var authors = require('./models/authors')
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var bookRouter = require('./Routes/bookRoutes')(Book);

//var authorRouter = require('./Routes/authorsRoutes')(Book);
app.use('/api/books', bookRouter);
//app.use('/api/authors', authorRouter);


app.get('/', function (req, res) {
    res.send('welcome to my API!');
});

app.listen(port, function () {
    console.log('Gulp is running on PORT:' + port);
});