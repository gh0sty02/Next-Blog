import React, { FC } from "react";
import PostItem from "./post-item";
import { IPost } from "../../interface/Post.interface";
import classes from "./posts-grid.module.css";

interface IProps {
  posts: IPost[];
}

const PostGrid: FC<IProps> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
