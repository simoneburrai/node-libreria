const validateBooksMiddleware = function (req,res,next){
    if(!req.body.title || !req.body.author){
        res.json({
            error: "Inserire il titolo e l'autore del libro"
        })
    }
}

module.exports = validateBooksMiddleware;