import classes from "./all-posts.module.css";

import PostGrid from "./posts-grid";

import { IPost } from "../../interface/Post.interface";
import { FC } from "react";

interface IProps {
  posts: IPost[];
}

const AllPosts: FC<IProps> = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
