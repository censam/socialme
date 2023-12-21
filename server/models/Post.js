// models/Post.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
 {
  content: {
   type: String,
   required: true,
  },
  userId: {
   type: Schema.Types.ObjectId,
   ref: "User", // Assuming you have a User model
   required: true,
  },
  picture: String,
  likes: {
   type: Map,
   of: Boolean,
  },
  comments: {
   type: Array,
   default: [],
  },
 },
 { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
