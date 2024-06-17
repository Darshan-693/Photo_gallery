const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());



app.use("/", require("./routes"));


app.listen(process.env.port , ()=>{
    console.log(`server Started at ${process.env.port}`)
})