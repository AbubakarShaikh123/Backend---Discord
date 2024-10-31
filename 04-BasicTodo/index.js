import express from "express";
import {addTodo,deleteTodo,getTodos,updateTodo,registor} from "./controllers/index.js"

const app = express()
const port = 5000
app.use(express.json())


// app.get("/",getTodos)
app.post("/getTodos",getTodos)
app.post("/addTodo",addTodo )
app.post("/deleteTodo", deleteTodo)
app.post("/updateTodo", updateTodo)
app.post("/registor", registor)


app.listen(port,()=>{
    console.log(`Server is listening at port : ${port}`);
})