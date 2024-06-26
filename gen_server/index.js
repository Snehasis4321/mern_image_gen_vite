import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import connectDB from "./mongo/connect.js"
import postRoutes from "./routes/postRoutes.js"
import dalleRoutes  from "./routes/dalleRoutes.js"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json({ limit: "50mb" }))


app.use("/api/v1/post", postRoutes)
app.use("/api/v1/dalle", dalleRoutes)


const PORT = process.env.PORT || 5000

app.get("/",async(req,res)=>{
  res.send("Hello World")  
})



const startServer = async () => {
    try{
        connectDB(process.env.MONGODB_URL)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }catch(error){
        console.log(error)    
    }
}

startServer()
