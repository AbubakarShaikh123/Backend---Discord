import prisma from "../utils/prismaClient.js";

export default async function updateTodo(req, res) {
    try {
        const {id, title, completed} = req.body
        if (!id || !title || !completed) {
            return res.status(400).json({msg:"all fields are required"})
        } 
        const todo = await prisma.todos.findUnique({where:{id}})
        if (!todo) {
            return res.status(400).json({msg : "Invalid Id"})
        }
        await prisma.todos.update({
            where:{id},
            data:{title,completed}
        })
        res.status(200).json({msg:"Todo updated"})

    } catch (error) {
        console.log("Error occured at POST : deleteTodo ",error);
        res.status(500).json({message : "Internal Server Error"})
    }
}