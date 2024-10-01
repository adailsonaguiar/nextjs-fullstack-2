import path from "path"
import { promises as fs } from 'fs';
import matter from "gray-matter";

export interface Post {
  metadata: {
    date: string;
    tags: string[];
    url: string;
  }
  title: string;
  content: string;
  slug: string;
}

export const PostsService = () => {
  const getAll = async () => {
    const PATH_POSTS = path.resolve(".", "_data", "posts");
    const postFiles = await fs.readdir(PATH_POSTS, { encoding: "utf-8" });
    const postsPromise = postFiles.map(async (postFileName) => {
      const filePath = path.join(PATH_POSTS, postFileName);
      const fileContent = await fs.readFile(filePath, { encoding: "utf-8" });
      const { data, content } = matter(fileContent);

      return {
        metadata: {
          date: data.date,
          tags: data.tags,
          url: data.url
        },
        title: data.title,
        content,
        slug: postFileName.replace(".md", ""),
      } as Post
    })


    return await Promise.all(postsPromise)
  }

  return { getAll }
}
