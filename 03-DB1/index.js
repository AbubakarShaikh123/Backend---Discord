import express from "express";
import registor from "./controllers/registor.controllers.js";
import login from "./controllers/login.controllers.js";
import createPost from "./controllers/createPost.controllers.js";
import getPosts from "./controllers/getPosts.controllers.js"
import getUsers from "./controllers/getUsers.controller.js";
import deleteUser from "./controllers/deleteUser.controller.js";


const app = express()
const port = 5000
app.use(express.json())

app.get("/",(req, res)=>{res.send("Hello")})

app.post("/registor",registor)
app.post("/login",login)
app.post("/post",createPost)
app.get("/post",getPosts)
app.post("/getUsers",getUsers)
app.post("/deleteUsers",deleteUser)

app.listen(port,()=>{
    console.log(`Server is listening at port : ${port} `);
})