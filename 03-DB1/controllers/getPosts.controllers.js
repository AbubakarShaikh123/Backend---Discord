import prisma from "../utils/prismaClient.js";

export default async function createPost(req, res) {
    try {
        const {title, id} = req.body
        if (!title && !id) {
           const posts = await prisma.posts.findMany({}) 
           if(posts) { 
             return res.status(200).json({posts})
            }
           return res.status(400).json({msg : "posts not found"})
        }
        if (id) {
            const post = await prisma.posts.findUnique({where : {id}})
            if(post) {
                return res.status(200).json({post}) 
            }
            return res.status(400).json({msg : "post not found"})        
        }
        if (title && !id) {
            const posts = await prisma.posts.findMany({where : {title}})
            if(posts){ 
                return res.status(200).json({posts, msg :"aaaaa"}) 
            }
            return res.status(400).json({msg : "post not found"})
        }
        res.status(500).json({msg : "error in code"})
        
    } catch (error) {
        console.log("Error occured at GET : post ",error);
        res.status(500).json({"message" : "Internal Server Error"}) 
    }
}