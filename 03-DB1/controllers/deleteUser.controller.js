import prisma from "../utils/prismaClient.js";

export default async function deleteUser(req, res) {
    try {
        const {id, name} = req.body
        if (!id && !name) {
           await prisma.user.deleteMany({})
           .then(()=>{
           return res.status(200).json({msg : "all users are deleted"})
           })
        }

        if (id) {
            const user = await prisma.user.findUnique({
                where :{id},
            })
            if(user) { 
             await prisma.user.delete({where : {id}})
             return res.status(200).json({msg : "user deleted"})
             
             
            }
           return res.status(400).json({msg : "user not found"})
        }

        if (!id && name) {
            await prisma.user.deleteMany({
                where : {name}
            })
            return res.status(200).json({msg : "user deleted"})
        }

        res.status(500).json({msg : "error in code"})
        
    } catch (error) {
        console.log("Error occured at POST : deleteUser ",error);
        res.status(500).json({"message" : "Internal Server Error"}) 
    }
}