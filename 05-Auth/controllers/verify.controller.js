import { prisma } from "../utils/prismaClient.js";
import jwt from "jsonwebtoken"

export default async function verify(req, res) {
    try {
        const {token} = req.body
        if (!token) {
            return res. status(400).json({msg:"Token is required"})
        }

        const verified = jwt.verify(token, process.env.JWT_KEY)
        console.log("Verfied : ", verified);

        if (verified) {
            return res.status(200).json({msg : "Verification Completed"})
        }

        res.status(500).json({msg:"Error in Code"})
        

    } catch (error) {
        console.log("Error",error);
        res.status(500).json({msg:"Internal server error"})
    }
}