import prisma from "../utils/prismaClient.js";

export default async function getUsers(req, res) {
    try {
        const {id, name} = req.body
        if (!id && !name) {
           const users = await prisma.user.findMany({})
           if(users) { 
            return res.status(200).json({users})
           }
          return res.status(400).json({msg : "users not found"})
        }
        if (id) {
            const user = await prisma.user.findMany({
                where :{id},
                // select : {password : false}  this will not work
                 select : {id :true, name:true, email:true }
            })
            if(user) { 
             return res.status(200).json({user})
            }
           return res.status(400).json({msg : "user not found"})
        }
        res.status(500).json({msg : "error in code"})
        
    } catch (error) {
        console.log("Error occured at GET : getUsers ",error);
        res.status(500).json({"message" : "Internal Server Error"}) 
    }
}