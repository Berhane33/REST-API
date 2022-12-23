const express = require("express");
const { connecter } = require("./db/connect");
const userRoute = require("./route/user");
const app = express();

const hostname = "localhost";
const port = 3000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use("/api/v1", userRoute);

connecter("mongodb://127.0.0.1:27017/", (error) =>{
    if(error){
        console.log("Can not connect to database!");
        process.exit(-1);
    }else{
        console.log("Connected sucessfully!");
        app.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
          });
        
    }
});



