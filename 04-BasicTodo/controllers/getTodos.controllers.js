import prisma from "../utils/prismaClient.js";

export default async function getTodos(req, res) {
    try {
        const todos = await prisma.todos.findMany({})
        if (todos) {
            return res.status(200).json({todos})
        }
        res.status(200).json({msg : "thers is no todo"})
    } catch (error) {
        console.log("Error occured at GET : getTodos ",error);
        res.status(500).json({"message" : "Internal Server Error"})
    }
}