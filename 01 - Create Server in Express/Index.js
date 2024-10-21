import express from 'express'
import fs from 'fs'


const port = 4000
const app = express()
app.use(express.json())
const users = [
    {
        id : 1,
        name : "Abu"
    },
    {
        id:2,
        name: "Abubakar"
    }
]

let visitors = 0
const midFunc = async (req, res, next) =>{
    visitors++
    console.log(`visitors : ${visitors} `);
    const {host, method, url} = req
    await fs.appendFile("./logs.txt",`${method} ${host} ${url} \n`,()=>{
        console.log("log saved");
        next()
    })
}

// Global middleware
app.use(midFunc)


//  if we pass this as a middleware, then "testMidFunc" and GLOBAL MIDDLEWARE both will run
const testMidFunc = (req,res,next)=>{
    console.log("Thalapathy");
    next()
}

//  app.METHOD('ROUTE',(REQ,RES)=>{  })

 

// "testMidFunc" and GLOBAL MIDDLEWARE both will run 
app.get('/',testMidFunc,(req,res)=>{
    res.send("Hello This is GET req ")
}) 

// "testMidFunc" and GLOBAL MIDDLEWARE both will run 
app.post('/login',testMidFunc,(req,res)=>{
    const {username, password} = req.body
    if (username==="Abu" && password==="Abu123" ) {
        res.send(`Wellcome ${username} `)
    }
    res.send("ERROR : Invalid Credentials")
})

// "testMidFunc" and GLOBAL MIDDLEWARE both will run 
app.post('/getUsers',testMidFunc,(req,res)=>{
    res.status(200).json({visitors,users})
})

app.listen(
    port, 
    ()=>{console.log(`Server Started on port : ${port}`)}
)