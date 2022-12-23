const { User } = require("../models/user");
const client = require("../db/connect");

const addUser = async (req, res) => {
    try{
        let user = new User(req.body.name, req.body.address, req.body.phone);

        let result = await client.bd().collection("users").insertOne(user);
        res.status(200).json(result);
    }catch(error) {
        console.log(error);
        res.status(500).json(error);

    }
};


module.exports = { addUser };
