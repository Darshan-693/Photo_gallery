const fs = require("fs");
const getlikes = async (req,res)=>
{
    await fs.readFile('./likes.json', async (error,data)=>{
        if(error)
            console.log(error)
        else
        {
            data = JSON.parse(data);
            if(data[req.headers.user]!==undefined)
            res.send({photos:data[req.headers.user].likedPics});
        else
        res.send({photos:[]})
        }
    })
}

module.exports = getlikes;