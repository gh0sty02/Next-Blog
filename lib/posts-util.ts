import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  console.log(fs.readdirSync(postsDirectory));
  return fs.readdirSync(postsDirectory);
};

export function getPostsData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(fileContent);

  const PostData = {
    slug: postSlug,
    ...data,
    content,
  };

  return PostData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => getPostsData(postFile));

  const sortedPosts = allPosts.sort((p1, p2) => (p1.date > p2.date ? -1 : 1));

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((p) => p.isFeatured);

  return featuredPosts;
}
