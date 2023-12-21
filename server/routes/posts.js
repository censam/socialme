import express from "express";
import {
 getFeedPosts,
 getUserPosts,
 likePost,
} from "../controllers/postController.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

// Read
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// patch
router.patch("/:id/like", verifyToken, likePost);

export default router;
