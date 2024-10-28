import prisma from "../utils/prismaClient.js";

export default async function registor(req, res) {
    try {
        const {name, email, password} = req.body
    

        if (!name || !email || !password) {
           return res.status(400).json({message : "All field required"})
        }
        const mail = await prisma.user.findFirst({
            where: {email }
        })

        if (mail) {
          return res.status(400).json({message : "user already exist"})
        }

        await prisma.user.create({
          data : {name, email, password}
        })
        
        console.log(mail);
        res.status(201).json({message : "user created successfully"})

      } catch (error) {
        console.log("Error occured at POST : registor ",error);
        res.status(500).json({"message" : "Internal Server Error"}) 
      }
}