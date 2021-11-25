import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import { IData } from "../../interface/Post.interface";
import { FC } from "react";

const AllPostsPage: FC<{ posts: IData[] }> = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

export default AllPostsPage;
