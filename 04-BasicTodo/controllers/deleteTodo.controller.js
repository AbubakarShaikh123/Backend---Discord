import prisma from "../utils/prismaClient.js";

export default async function deleteTodo(req, res) {
    try {
        const {id} = req.body
        if (!id ) {
            return res.status(400).json({msg : " id is required"})
        }
        const todo =await prisma.todos.findUnique({where : {id}})
        if (!todo) {
                return res.status(400).json({msg : "Invalid Id"})
         }
        await prisma.todos.delete({ where:{id} })
        res.status(200).json({msg : "following todo is deleted ", todo})

    } catch (error) {
        console.log("Error occured at POST : deleteTodo ",error);
        res.status(500).json({"message" : "Internal Server Error"})
    }
}