const responseHelper = require('express-response-helper').helper();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models/index")

const app = express();
app.use(responseHelper);

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async(req,res)=>{
    res.json({message :'yo'});
});

app.get("/user", async(req, res) => {
    const users = await db.User.findAll();
    res.respond( users, 200 );
  });

  app.get("/user/:id", async(req, res) => {
    const id = parseInt(req.params.id)
    const users = await db.User.findOne({
        where: {
            id: id
        }
    });
    if (users){
        res.respond( users, 200 );
    }
    else{
        res.responds({message:'error'})
    }
  });
  
// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
