const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())

const PORT = process.env.PORT || 3000;

app.get("/", async(req,res,next)=>{
    res.send(`<h1> Hello World, It's ruro again...... </h1>`)
    
})

app.get("/download", (req,res,next)=>{
    console.log("endpoint hit")
    res.download("./CED-300.pdf");
})

app.get("/database", async (req, res, next) => {
    try {
        let mydb = await pool.query("CREATE DATABASE TEAM");
        res.status(200).send(`<h2> Database created</h2>`)
        return
    }
    catch (err) {
        console.log(err)
        return
    }
})

app.get("/table", async (req, res, next) => {
    try {
        let mydb = await pool.query(`
        CREATE TABLE IF NOT EXISTS barcelona (
          id serial PRIMARY KEY,
          name VARCHAR(255),
          age INT
        );
      `);
        res.status(200).send(`<h2> Table barcelona created</h2>`)
        return
    }
    catch (err) {
        console.log(err)
        return
    }
})

app.listen(PORT, ()=>{
    console.log(`server listening at port ${PORT}`)
})