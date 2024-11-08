import {prisma} from "../utils/prismaClient.js"


export default async function login(req, res) {
    try {
        const {username, password} = req.body
        if(!username || !password) return res.status(400).json({msg:"All fields are required"})

        

    } catch (error) {
        console.log("Error",error);
        res.status(500).json({msg:"Internal server error"})
    }
}