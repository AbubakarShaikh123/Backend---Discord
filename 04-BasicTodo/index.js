import express from "express";
import {addTodo,deleteTodo,getTodos,updateTodo} from "./controllers/index.js"

const app = express()
const port = 5000
app.use(express.json())


app.get("/",getTodos)
app.get("/getTodos",getTodos)
app.post("/addTodo",addTodo )
app.post("/deleteTodo", deleteTodo)
app.post("/updateTodo", updateTodo)

app.listen(port,()=>{
    console.log(`Server is listening at port : ${port}`);
})