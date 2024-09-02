import Post from "../database/schema.ts";
import { PostType } from "../database/schema.ts";

type dataType = {
  data: PostType;
};
const resolvers = {
  async getPosts() {
    const posts = await Post.find();
    return posts;
  },
  async getPost({id}:{id:string}){
  const post = await Post.findById(id)
  return post
  },
  async createPost({ data }: dataType) {
    const post = await Post.create(data);
    return post;
  },
};

export default resolvers;
