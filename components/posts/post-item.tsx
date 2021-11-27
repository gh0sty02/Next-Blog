import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { IPost } from "../../interface/Post.interface";

interface IProps {
  post: IPost;
}

import classes from "./post-item.module.css";

const PostItem: FC<IProps> = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  console.log(imagePath);

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              width={300}
              height={200}
              alt={title}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <div>
              <h3>{title}</h3>
              <time>{formattedDate}</time>
              <p>{excerpt}</p>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
