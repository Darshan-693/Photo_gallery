const express = require("express");
require("dotenv").config();
const app = express();
const cors = require('cors');
app.use(cors(
    {
        origin: "https://666ff2cff9e5241d9dd3e08d--storied-lamington-bbaef6.netlify.app"
    }
));
app.use(express.json());



app.use("/", require("./routes"));


app.listen(process.env.port , ()=>{
    console.log(`server Started at ${process.env.port}`)
})
