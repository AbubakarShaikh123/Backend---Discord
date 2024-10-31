import prisma from "../utils/prismaClient.js";

export default async function getTodos(req, res) {
    try {
        const {userId} = req.body
        if (!userId) {
            return res.status(400).json({msg : "userId is required"})
        }
        const todos = await prisma.user.findMany({
            where : {id : userId},
            select : {name: true, todos:{select : {id:true, title:true, completed:true}}}
        })

        if (todos) {
            return res.status(200).json({todos})
        }
        res.status(200).json({msg : "thers is no todo"})
    } catch (error) {
        console.log("Error occured at GET : getTodos ",error);
        res.status(500).json({"message" : "Internal Server Error"})
    }
}