const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())

const PORT = process.env.PORT || 3000;

app.get("/download", (req,res,next)=>{
    console.log("endpoint hit")
    res.download("./CED-300.pdf");
})

app.listen(PORT, ()=>{
    console.log("server listening at port 3000")
})