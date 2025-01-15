import ImageKit from "imagekit";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

// Initialize ImageKit
const imagekit = new ImageKit({
    urlEndpoint: process.env.IK_URL_ENDPOINT,
    publicKey: process.env.IK_PUBLIC_KEY,
    privateKey: process.env.IK_PRIVATE_KEY,
});
export const getPosts = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;

    const query = {};

    console.log(req.query);

    const cat = req.query.cat;
    const author = req.query.author;
    const searchQuery = req.query.search;
    const sortQuery = req.query.sort;
    const featured = req.query.featured;

    if (cat) {
        query.category = cat;
    }

    if (searchQuery) {
        query.title = { $regex: searchQuery, $options: "i" };
    }

    if (author) {
        const user = await User.findOne({ username: author }).select("_id");

        if (!user) {
            return res.status(404).json("No post found!");
        }

        query.user = user._id;
    }

    let sortObj = { createdAt: -1 };

    if (sortQuery) {
        switch (sortQuery) {
            case "newest":
                sortObj = { createdAt: -1 };
                break;
            case "oldest":
                sortObj = { createdAt: 1 };
                break;
            case "popular":
                sortObj = { visit: -1 };
                break;
            case "trending":
                sortObj = { visit: -1 };
                query.createdAt = {
                    $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
                };
                break;
            default:
                break;
        }
    }

    if (featured) {
        query.isFeatured = true;
    }

    // Log query execution plan
    const explainResult = await Post.find(query)
        .populate("user", "username")
        .sort(sortObj)
        .limit(limit)
        .skip((page - 1) * limit)
        .explain("executionStats");

    console.log("Query Execution Plan:", explainResult);

    // Fetch posts after checking query performance
    const posts = await Post.find(query)
        .populate("user", "username")
        .sort(sortObj)
        .limit(limit)
        .skip((page - 1) * limit);

    const totalPosts = await Post.countDocuments();
    const hasMore = page * limit < totalPosts;

    res.status(200).json({ posts, hasMore });
};

export const getPost = async (req, res) => {
    try {
        const post = await Post.findOne({ slug: req.params.slug }).populate("user", "username img");
        if (!post) return res.status(404).json({ error: "Post not found" });
        res.status(200).json(post);
    } catch (error) {
        console.error("Error in getPost:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const createPost = async (req, res) => {
    try {
        const { userId } = req.auth;
        if (!userId) return res.status(401).json("Not authenticated");

        const user = await User.findOne({ clerkUserId: userId });
        if (!user) return res.status(404).json("User not found");

        let slug = req.body.title.toLowerCase().replace(/ /g, "-");
        while (await Post.findOne({ slug })) slug += `-${Math.random().toString(36).substr(2, 5)}`;

        const newPost = new Post({ user: user._id, slug, ...req.body });
        const post = await newPost.save();

        res.status(201).json(post);
    } catch (error) {
        console.error("Error in createPost:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const deletePost = async (req, res) => {
    try {
        const { userId } = req.auth;
        if (!userId) return res.status(401).json("Not authenticated");

        const role = req.auth.sessionClaims?.metadata?.role || "user";
        const post = await Post.findById(req.params.id);

        if (role !== "admin" && (!post || post.user.toString() !== req.auth.userId)) {
            return res.status(403).json("You can delete only your posts!");
        }

        await post.remove();
        res.status(200).json("Post has been deleted");
    } catch (error) {
        console.error("Error in deletePost:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const featurePost = async (req, res) => {
    try {
        const { userId } = req.auth;
        if (!userId) return res.status(401).json("Not authenticated");

        const role = req.auth.sessionClaims?.metadata?.role || "user";
        if (role !== "admin") return res.status(403).json("You cannot feature posts!");

        const post = await Post.findById(req.body.postId);
        if (!post) return res.status(404).json("Post not found");

        post.isFeatured = !post.isFeatured;
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        console.error("Error in featurePost:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const uploadAuth = async (req, res) => {
    try {
        const authParams = imagekit.getAuthenticationParameters();
        res.status(200).json(authParams);
    } catch (error) {
        console.error("Error in uploadAuth:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
