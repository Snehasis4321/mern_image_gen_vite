import express from "express"
import * as dotenv from "dotenv"
import {v2 as cloudinary} from "cloudinary"
import OpenAI from "openai";



dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION_KEY,
})
const router = express.Router()




router.route("/").get((req, res) => {
    res.status(200).json({message: "Hello from DALL-E"})
}).post(async (req, res) => {
    try{
        const {prompt} = req.body;
        const aiResponse = await openai.images.generate(
            { model: "dall-e-2", prompt: prompt ,size:"512x512"}
        )
        res.status(200).json(aiResponse.data[0].url)
    }catch(error){
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
    
})


export default router;