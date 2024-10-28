import prisma from "../utils/prismaClient.js";

export default async function createPost(req, res) {
    try {
        const {title} = req.body
         if ( !title) res.status(400).json({message : "Title is required"})
    
        await prisma.posts.create({
            data : {title }
        }) 
        
        res.status(201).json({msg : "Post created"})
        
    } catch (error) {
        console.log("Error occured at POST : post ",error);
        res.status(500).json({"message" : "Internal Server Error"}) 
    }
}