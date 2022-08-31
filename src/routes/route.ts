import { Router } from "express";
import testecontroller from "../controllers/controller.js";


const router = Router()

router.post('/battle',testecontroller)



export default router