import { GetStaticPropsContext } from "next";
import { FC, Fragment } from "react";
import PostContent from "../../components/posts/post-details/post-content";
import { IPost } from "../../interface/Post.interface";
import { getPostsFiles, getPostsData } from "../../lib/posts-util";
import Head from "next/head";

const PostDetailPage: FC<{ post: IPost }> = ({ post }) => {
  // if (!post) {
  //   return <p>Loading..</p>;
  // }
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  const slug = params!.slug;

  let postdata;

  if (typeof slug === "string") {
    postdata = getPostsData(slug);
  }

  return {
    props: {
      post: postdata,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
