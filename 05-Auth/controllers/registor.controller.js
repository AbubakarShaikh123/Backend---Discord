import {prisma} from "../utils/prismaClient.js"
import jwt from "jsonwebtoken"


export default async function registor(req, res) {
    try {
        const {username, password} = req.body
        if(!username || !password) {
            return res.status(400).json({msg:"All fields are required"})
        }

        const exist = await prisma.user.findUnique({where:{username}})

        if(exist) {
            return res.status(400).json({msg:"User already exist"})
        }

        const user = await prisma.user.create({
            data:{username, password},
            select :{username: true}
        })

        const token = jwt.sign({username}, process.env.JWT_KEY)

        if(user){
            return res.status(200).json({ wellcome : user.username , token})
        }

        res.status(500).json({msg : "Error in Code"})

    } catch (error) {
        console.log("Error",error);
        res.status(500).json({msg:"Internal server error"})
    }
}