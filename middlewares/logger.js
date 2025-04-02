const requestInfo = function (req,res,next){
    console.log({
        method: req.method,
        url: `127.0.0.1:3000/${req.url}`
    })
    next();
}
module.exports = requestInfo
