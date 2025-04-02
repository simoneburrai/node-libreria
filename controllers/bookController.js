const books = require("../data/books.js");

function index (req, res) {
    res.json(books);
}

function show (req, res) {
    const id = parseInt(req.params.id);
    const currentBook = books.find((book) => book.id === id);
    if(currentBook){
        res.json(currentBook);
    }else(
        res.json({
            status: 404,
            error: "Libro non trovato" 
           })
    )
}

function store (req, res) {
    const newId = books.at(-1).id + 1;
    console.log(req.body)
    const newBook = {
        "id": newId,
        "title": req.body.title,
        "author": req.body.author,
        "year": req.body.year,
        "available": req.body.available
        }
        console
        books.push(newBook);
    res.status(201).json(newBook);
}

function destroy (req, res) {
    const id = parseInt(req.params.id);
    const currentBookIndex = books.findIndex((book) => book.id === id);
    const removedBook = books.splice(currentBookIndex, 1);
    res.json(removedBook);

}

function update (req, res) {
    id = parseInt(req.params.id);
    const currentBook = books.find((book) => book.id === id)
    if(currentBook){
        currentBook.title = req.body.title;
        currentBook.author = req.body.author;
        currentBook.year = req.body.year;
        currentBook.available = req.body.available;
        res.json(currentBook)
    }else {
        res.status(404).json({
            status: 404,
            error: "Elemento non trovato"
        })
    }
    
}

function modify (req, res) {
    const id = parseInt(req.params.id);
    const currentBook = books.find((book) => book.id === id)
    if(!currentBook){
        res.status(404).json({
            status: 404,
            error: "Elemento non trovato"
        })
    }
    console.log(currentBook);
        if(req.body.title) {
            currentBook.title = req.body.title;
        };
        if(req.body.author) {
            currentBook.author = req.body.author;
        };
        if(req.body.year) {
            currentBook.year = req.body.year;
        };
        if(req.body.available) {
            currentBook.available = req.body.available;
        };
        console.log(currentBook);
        res.json(currentBook);
}

module.exports = {
    index,
    show,
    destroy,
    store,
    update,
    modify
}