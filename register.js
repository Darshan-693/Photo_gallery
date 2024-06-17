const fs = require("fs");
const bcrypt = require("bcrypt");
const register = async (req,res)=>
{
    await fs.readFile('./users.json', async (error,data)=>
    {
        if(error)
            console.log(error);
        else
        {
            data = JSON.parse(data);
            for(user in data)
            {
                if(user===req.body.email)
                {
                    res.send({auth:0})
                }
            }
            let pass = await  bcrypt.hash(req.body.password, await bcrypt.genSalt())
            console.log(pass)
            data[req.body.email]={
                Username: req.body.username,
                password: pass
            }
            await fs.writeFileSync('./users.json',JSON.stringify(data));
            res.send({auth:1})
        }
    })
}

module.exports = register;