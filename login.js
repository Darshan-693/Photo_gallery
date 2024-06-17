const fs = require("fs");
const bcrypt = require("bcrypt");
const login = async (req,res)=>
    {
        await fs.readFile('./users.json', async (error,data)=>{
            if(error)
                console.log(error)
            else
            {
                data = JSON.parse(data);
                for(user in data)
                {
                    console.log(req.headers.email)
                    if(user===req.headers.email)
                    {
                        if(await bcrypt.compare(req.headers.password,data[user].password))
                        {
                            res.send({auth:1,user:data[user].Username})
                            return
                        }
                        else
                        {
                            res.send({auth:0})
                            return
                        }
                    }
                }
                res.send({auth:2})
            }
        })
    }
module.exports = login;