const books = require("../data/books.js");

function index (req, res) {
    res.json(books);
}

function show (req, res) {
    res.send("Lista di un singolo libro");
}

function store (req, res) {
    res.send("Creiamo un nuovo libro");
}

function destroy (req, res) {
    res.send("Rimuoviamo un libro");
}

function update (req, res) {
    res.send("Modifichiamo totalmente un libro");
}

function modify (req, res) {
    res.send("Modifichiamo parzialmente un libro");
}

module.exports = {
    index,
    show,
    destroy,
    store,
    update,
    modify
}