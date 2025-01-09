import express from "express"
import connectDB from './lib/connectDB.js'
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from './routes/comment.route.js'
import webhookRouter from './routes/webhook.route.js'
import cors from 'cors'
import {clerkMiddleware} from '@clerk/express'



const app = express();

app.use(cors(process.env.CLIENT_URL));
app.use(clerkMiddleware())

app.use("/webhooks",webhookRouter)
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});


app.use("/users",userRouter);
app.use("/posts",postRouter);
app.use("/comments",commentRouter);


app.use((error,req,res,next)=>{
    res.status(
        error.status || 500
    )
    res.json({
        message:error.message || "Something went wrong",
        status:error.status,
        stack:error.stack
    })
})
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(env.process.PORT,()=>{
    connectDB();
    //console.log("Server is running");
})