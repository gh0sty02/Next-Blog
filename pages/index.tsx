import type { NextPage } from "next";
import React, { Fragment } from "react";
import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const dummyPosts = [
  {
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React Framework for production. It makes building websites and webapps super easy and also supports server side rendering due to which the pages are super fast",
    date: "2022-12-14",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React Framework for production. It makes building websites and webapps super easy and also supports server side rendering due to which the pages are super fast",
    date: "2022-12-14",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React Framework for production. It makes building websites and webapps super easy and also supports server side rendering due to which the pages are super fast",
    date: "2022-12-14",
    slug: "getting-started-with-nextjs3",
  },
  {
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React Framework for production. It makes building websites and webapps super easy and also supports server side rendering due to which the pages are super fast",
    date: "2022-12-14",
    slug: "getting-started-with-nextjs4",
  },
];

const Home: NextPage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={dummyPosts} />
    </Fragment>
  );
};

export default Home;
