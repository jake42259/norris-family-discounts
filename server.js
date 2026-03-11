import express from "express"
import cors from "cors"

const app = express()

const TAG = process.env.AMAZON_PARTNER_TAG || "jaken07-20"

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

app.get("/search",(req,res)=>{

 const query = req.query.q

 if(!query){
   return res.json({error:"Missing search query"})
 }

 const results = [
   {
     title:`${query} Example Product`,
     price:"$49.99",
     link:`https://amazon.com/s?k=${encodeURIComponent(query)}&tag=${TAG}`
   }
 ]

 res.json(results)

})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
})