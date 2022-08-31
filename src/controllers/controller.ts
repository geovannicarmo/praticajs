import { Request, Response } from "express"
import servece from "../sevices/service.js";

export default async function testecontroller(req: Request, res: Response){

const {firstUser, secondUser} = req.body 
    console.log(firstUser)
    console.log(secondUser)

    
    try{
        
        if(typeof firstUser!=="string" || typeof secondUser!=="string"){
            res.status(400).send('os nomes precisão ser strings')
        }
       const resultado = await servece(firstUser, secondUser)
       console.log(resultado)
        res.send(resultado)
    }catch(error){
       
        res.status(400).send('os nomes precisão ser strings')
    }
}