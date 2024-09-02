import { model, Schema } from "mongoose";

export interface PostType {
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

const postSchema = new Schema<PostType>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Post = model<PostType>("Blog", postSchema);

export default Post;
