const express = require("express");
require("dotenv").config();
const app = express();
const cors = require('cors');
app.use(cors(
    {
        origin: "https://https://667000acbb11221c2b4923f2--dapper-peony-421da1.netlify.app"
    }
));
app.use(express.json());



app.use("/", require("./routes"));


app.listen(process.env.port , ()=>{
    console.log(`server Started at ${process.env.port}`)
})
