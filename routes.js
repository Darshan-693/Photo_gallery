const router = require("express")();
const response = require("./functions");
const createUser = require("./register");

router.route("/Photos").get(response).post(response);
router.route("/").get((req,res)=>
{
    res.send({"hi":1})
})
router.route("/auth").post(createUser).get(require('./login'));

router.route("/like").post(require("./like")).get(require("./getlikes"))
module.exports = router;