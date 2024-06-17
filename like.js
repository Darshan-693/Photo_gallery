const fs = require("fs");
const like = async (req,res)=>
{
    await fs.readFile('./likes.json', async (error,data)=>{
        if(error)
            console.log(error)
        else
        {
            data = JSON.parse(data);
            if(req.body.like===0)
                {
                    if(data[req.body.user]===undefined)
                        {
                            let newUser = {likedPics : [req.body.pic]};
                            data[req.body.user] = newUser;
                        }
                        else
                        {
                            data[req.body.user].likedPics.push(req.body.pic);
                        }
                }
            else
            {
                if(data[req.body.user].likedPics.length===1)
                    {
                        data[req.body.user].likedPics=[];
                    }
                else
                data[req.body.user].likedPics = data[req.body.user].likedPics.splice(data[req.body.user].likedPics.indexOf(req.body.pic));
            }
            await fs.writeFileSync('./likes.json',JSON.stringify(data));
        }
    })
    res.send({})
}
module.exports = like;