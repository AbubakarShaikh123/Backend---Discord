import prisma from "../utils/prismaClient.js"

export default async function addTodo(req, res) {
   try {
            const {title, userId} = req.body
            if (!title || !userId) {
                return res.status(400).json({msg : "All fields are required "})
            }

            const user = await prisma.user.findFirst({where : {id : userId}})
            if (!user) {
                return res.status(400).json({msg : "Invalid userId"})
            }

            const addTodo = await prisma.user.update({
                where : {
                    id : userId},
                data : {
                    todos : { create : [{title}]}
                }
            }) 
        
            if (!addTodo) {
                return res.status(500).json({msg : "Server Error"})
            }

            res.status(200).json({msg : "todo created"})
   } catch (error) {
        console.log("Error occured at POST : addTodo ",error);
        res.status(500).json({"message" : "Internal Server Error"})
   }
}