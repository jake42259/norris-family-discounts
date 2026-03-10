import express from "express"
import cors from "cors"

const app = express()

const TAG = process.env.ASSOCIATE_TAG || "jaken07-20"

app.use(cors())

app.get("/", (req,res)=>{
 res.send("Norris Family Discounts API running")
})

app.get("/deal",(req,res)=>{

 const asin="B09XYZ"

 res.json({
   title:"Example Amazon Deal",
   price:"$29.99",
   link:`https://amazon.com/dp/${asin}?tag=${TAG}`
 })

})

app.listen(3000,()=>{
 console.log("Server running on port 3000")
})