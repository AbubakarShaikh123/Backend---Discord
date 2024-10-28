import prisma from "../utils/prismaClient.js"

export default async function addTodo(req, res) {
   try {
            const {title} = req.body
            if (!title) {
                return res.status(400).json({msg : "title is required for todo"})
            }

            await prisma.todos.create({
                data : {title}
            })

            res.status(200).json({msg : "todo created"})
   } catch (error) {
        console.log("Error occured at POST : addTodo ",error);
        res.status(500).json({"message" : "Internal Server Error"})
   }
}