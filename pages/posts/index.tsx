import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import { IPost } from "../../interface/Post.interface";
import { FC, Fragment } from "react";
import Head from "next/head";

const AllPostsPage: FC<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all my programming related content and posts"
        />
      </Head>
      <AllPosts posts={posts} />;
    </Fragment>
  );
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
