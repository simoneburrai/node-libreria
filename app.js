const express = require("express");
const bookRouter = require("./routes/bookRoutes");
const app = express();
const port = 3000;


app.use("/books", bookRouter);

app.listen(port, ()=>{
    console.log(`Server Online nella porta ${port}`);
});