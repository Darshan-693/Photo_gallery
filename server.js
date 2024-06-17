const express = require("express");
require("dotenv").config();
const app = express();
const cors = require('cors');
app.use(cors(
    {
        origin: "https://666ff7d7cdc660222d045ee7--reliable-klepon-d4763b.netlify.app"
    }
));
app.use(express.json());



app.use("/", require("./routes"));


app.listen(process.env.port , ()=>{
    console.log(`server Started at ${process.env.port}`)
})
