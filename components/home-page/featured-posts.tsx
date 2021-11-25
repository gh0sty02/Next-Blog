import PostGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";
import { IPost } from "../../interface/Post.interface";
import { FC } from "react";

interface IProps {
  posts: IPost[];
}

const FeaturedPosts: FC<IProps> = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
