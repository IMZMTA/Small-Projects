const { faker, da } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  database : "Sql_Base",
  password : "root@123",
});

let getRandomUser = () => {
  return [
    // faker.datatype.uuid(),   //=>deprecated instead used faker.string.uuid(),
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let q = "INSERT INTO user (id,username,email,password ) VALUES ?";

// let data = [];

// for(let i =1; i<=100; i++){
//   data.push(getRandomUser());
// }

// try{
//   connection.query(q,[data],(err,result)=>{
//     if(err) throw err;
//     else{
//       console.log(result);
//     }
//   })
// }catch(err){
//   console.log(err);
// }
//   connection.end();

//Home Route
app.get("/", (req,res)=>{
  let q = `SELECT count(*) FROM user`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs",{count});
    })
  }catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

//Get all user Route
app.get("/user", (req,res)=>{
  let q = "SELECT * From User";
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      res.render("show.ejs",{result});
    })
  }catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

//Add Route Page
app.get("/add", (req,res)=>{
  res.render("create.ejs");
});

//Add route page post
app.post("/user", (req,res)=>{
  // let id = faker.datatype.uuid();
  let id = faker.string.uuid();
  let {username,email,password} = req.body;
  let q = "INSERT INTO user (id,username,email,password ) VALUES ?";
  let data = [[id,username,email,password]];
  try{
    connection.query(q,[data],(err,result)=>{
      if(err) throw err;
      res.redirect("/user");
    })
  }catch(err){
    console.log(err);
    res.send("Some error occurred in database");
  }
});

//Edit Page Route
app.get("/user/:id/edit", (req,res)=>{
  let {id} = req.params;
  let q = `Select * from user where id = '${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0]
      res.render("edit.ejs",{user});
    })
  }catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

//Update/Edit Route Page
app.patch("/user/:id",(req,res)=>{
  let {id} = req.params;
  let {password : formPass, username:newUsername} = req.body;
  let q = `Select * from user where id = '${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("Wrong Password");
      }else{
        let q2 = `Update user SET username = '${newUsername}' where id = '${id}'`;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          res.redirect("/user");
        })
      }
    })
  }catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

//Delete route page Post
app.get("/user/:id/delete", (req,res)=>{
  let {id} = req.params;
  let q = `Select * from user where id = '${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0]
      res.render("delete.ejs",{user});
    })
  }catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

//Delete Post Route
app.delete("/user/:id",(req,res)=>{
  let {id} = req.params;
  let {password : formPass, email:newEmail} = req.body;
  let q = `Select * from user where id = '${id}'`;
  try{
    connection.query(q,(err,result)=>
    {
      if(err) throw err;
      let user = result[0];
      if(formPass == user.password && newEmail == user.email)
      {
        let q2 = `Delete from user where id = '${id}'`;
        connection.query(q2,(err,result)=>
        {
          if(err) throw err;
          res.redirect("/user")
        })
      }else{
        res.send("Wrong Password or Email")
      }
    })
  }catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

app.listen(port,()=>{
  console.log(`Server is listening at port no ${port}`);
})