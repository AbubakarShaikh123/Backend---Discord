import prisma from "../utils/prismaClient.js";

export default async function deleteTodo(req, res) {
    try {
        const {userId, todoId} = req.body
        if (!userId  || !todoId ) {
            // await prisma.todos.deleteMany({})
            return res.status(400).json({msg : " all fields are required"})
        }
        const todo =await prisma.user.findUnique({
            where : {id : userId},
            select : {todos : { where:{id:todoId} , select : {id: true, title:true, completed :true}}}
        })
        // console.log(todo.todos);
        

        if (todo.todos.length === 0 ) {
                return res.status(400).json({msg : "Invalid userID or todoID"})
         }
         
        await prisma.todos.delete({ where:{id : todoId} })
        
        res.status(200).json({msg : "following todo is deleted ", "todo" : todo.todos})

    } catch (error) {
        console.log("Error occured at POST : deleteTodo ",error);
        res.status(500).json({"message" : "Internal Server Error"})
    }
}