import { GetStaticPropsContext } from "next";
import { FC } from "react";
import PostContent from "../../components/posts/post-details/post-content";
import { IData } from "../../interface/Post.interface";
import { getPostsFiles, getPostsData } from "../../lib/posts-util";

const PostDetailPage: FC<{ post: IData }> = ({ post }) => {
  return <PostContent post={post} />;
};

export function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  const slug = params!.slug;

  const postData = getPostsData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: true,
  };
}

export default PostDetailPage;
