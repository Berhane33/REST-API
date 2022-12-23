const express = require("express");
const { connect } = require('./db/connect');
const routeUser = require("./route/user");
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api/v1", routeUser);

connect("mongodb://localhost:27017/", (err) => {
    if(err){
        console.log("Can not connect with database");
        process.exit(-1);
    }else{
        console.log("Connected sucessfully!");
        app.listen(3000);
        console.log("server is listening at port 3000");

    }
});
