import Post from "../database/schema.ts";

const resolvers = {
  hello() {
    return "hello world";
  },
  async getPosts() {
    const posts = await Post.find();
    return posts;
  },
  async createPost(data: typeof Post) {
    const post = await Post.create(data);
    return post;
  },
};

export default resolvers;
