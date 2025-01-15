import express from "express";
import connectDB from './lib/connectDB.js';
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from './routes/comment.route.js';
import webhookRouter from './routes/webhook.route.js';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';

const app = express();

const allowedOrigins = [process.env.CLIENT_URL || "http://localhost:5173"];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));

app.use(clerkMiddleware());
app.use(express.json());

app.use("/webhooks", webhookRouter);

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message || "Something went wrong",
        status: error.status,
        stack: error.stack
    });
});

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(process.env.PORT, () => {
    connectDB();
    console.log("Server is running");
});
