import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import React, { FC } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />

      <ReactMarkdown
        components={{
          p: ({ node, children }) => {
            if (node)
              if (node.children[0]?.tagName === "img") {
                const image = node.children[0];
                return (
                  <div className={classes.image}>
                    <Image
                      src={image.properties.src}
                      alt={image.properties.alt}
                      width={600}
                      height={300}
                    />
                  </div>
                );
              }
            // Return default child if it's not an image
            return <p>{children}</p>;
          },
          code: (...props) => {
            const language = props[0].className?.split("-")[1];
            const value = props[0].children[0];
            return (
              <SyntaxHighlighter
                language={language}
                // eslint-disable-next-line react/no-children-prop
                children={value}
                style={atomDark}
              />
            );
            // );
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
