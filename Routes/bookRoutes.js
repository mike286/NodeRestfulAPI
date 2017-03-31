var express = require('express');


var routes = function (Book) {

    var bookRouter = express.Router();



    bookRouter.route('/')
        .post(function (req, res) {
            var book = new Book(req.body);

            book.save();
            res.status(201).send(book);
        })
        .get(function (req, res) {

            var query = {};

            if (req.query.genre) {
                query.genre = req.query.genre;
            }
            Book.find(query, function (err, books) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(books);
            });


        });
    bookRouter.use('/bookId', function(req,res,next)
    Book.findById(req.params.bookId, function (err, books) {
                if (err)
                    res.status(500).send(err);
                else if (book) {
                    req.bookn = book;
                    next();
                }
                else
                {
                    res.status(404).send('no book found');
                }
                    res.json(books);)

    bookRouter.route('/Books/:bookId') {

    }
        .get(function (req, res) {
                res.json(req.book);

            Book.findById(
            });


        });
    //author route
    bookRouter.route('/Books/:authorRoutes')
        .get(function (req, res) {


            Book.findauthor(req.params.author, function (err, books) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(books);
            });


        });
            .put(function (req, res){
                         
                req.book.title = req.body.title;
                req.book.author = req.body.title;
                req.book.genre = req.body.genre;
                req.book.read = req.body.read;
                req.book.save(function(err) {
                    if(err)
                        res.status(500).send(err);
                        else
                        res.json(req.book)
                    res.json(books);
                }
            
                .patch(function(req,res) {
                    if(req.body._id)
                    delete req.body._id;
                    for(varp in req.body)
                    {
                        req.body[p] = req.body[p];
                    }
                    req.book.save(function,err){
                        if(err)
                        res.status(500).send(err);
                        else
                        res.json(req.book);
                }
 return bookRouter;

}

   



    module.exports = routes;