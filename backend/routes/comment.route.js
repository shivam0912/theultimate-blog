import express from "express"

const router = express.Router();

router.get("/comment-test",(req,res)=>{
    res.status(200).send("Comment Test route")
})

export default router 