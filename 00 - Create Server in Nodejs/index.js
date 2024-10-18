import fs from 'fs'
import  http from 'http'
import path from 'path'

// console.log(http);

const filePath = path.join(import.meta.dirname, "views", "index.html")
console.log(filePath);

const data = await fs.readFile("./path.js", ()=>{})

const port = 400
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content_type" : "text/plain"})  // optional
    console.log(req.url);
   
    if (req.url === '/') {
        console.log(data);
        
        res.write("data")
    }
    if (req.url === '/login') {
        console.log(data);
        
        res.write("plz login.....")
    }
  
    
    res.write("Wellcome to the server")
    // if not ended res then req will be stuck
    res.end()
})

server.listen(port, ()=>{
    console.log(`Server is listening at port : ${port}`);
    
})