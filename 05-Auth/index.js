import express from "express"
import {login, registor, verify} from "./controllers/index.js"
import cors from 'cors'

const app = express()
const port = 4000

app.use(express.json())

// app.use(cors())

app.get("/", cors() ,(req,res)=>{res.status(200).json({msg:"Hellloe"})})
app.post("/registor", registor)
app.post("/verify", verify )


app.listen(port,()=>{
    console.log(`Server is Listening at posrt :  ${port}`); 
})