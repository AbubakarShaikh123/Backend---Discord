import prisma from "../utils/prismaClient.js";

export default async function (req, res){
    try {
        const {email, password} = req.body
         if ( !email || !password) {
           return res.status(400).json({message : "All field required"})
        }
        const user = await prisma.user.findFirst({
            where : {email}
        })
        
        if (!user || user.password != password) {
            return res.status(400).json({message : "Invalid Credential"})
        }

        const posts = await prisma.posts.findMany({}) 
        
        res.status(201).json({msg : "Loged in successfully" ,posts})
        
    } catch (error) {
        console.log("Error occured at POST : login ",error);
        res.status(500).json({"message" : "Internal Server Error"}) 
    }
}