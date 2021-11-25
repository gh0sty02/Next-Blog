import type { NextPage } from "next";
import React, { Fragment } from "react";
import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

interface IData {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
}

const Home: NextPage<{ posts: IData[] }> = ({ posts }) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}

export default Home;
