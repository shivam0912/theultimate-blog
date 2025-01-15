import { Schema } from "mongoose";
import mongoose from "mongoose";

const postSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        img: {
            type: String,
        },
        title: {
            type: String,
            required: true,
            index: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        desc: {
            type: String,
        },
        category: {
            type: String,
            default: "general",
            index: true,
        },
        content: {
            type: String,
            required: true,
        },
        isFeatured: {
            type: Boolean,
            default: false,
        },
        visit: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Post", postSchema);
