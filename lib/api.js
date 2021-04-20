import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostPaths() {
  let postPaths = [];
  const years = fs.readdirSync(postsDirectory);
  years.forEach((year) => {
    const months = fs.readdirSync(join(postsDirectory, year));
    months.forEach((month) => {
      const posts = fs.readdirSync(join(postsDirectory, year, month));
      posts.forEach((pid) => {
        postPaths.push({ year, month, pid });
      });
    });
  });
  return postPaths;
}

export function getPostByPath({ year, month, pid }, fields) {
  const fullPath = join(postsDirectory, year, month, pid, "index.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === "pid") {
      items[field] = pid;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
    if (field === "date") {
      items[field] = String(data.date);
    }
  });

  return items;
}

export function getPostsByPage(page, fields = []) {
  const postPaths = getPostPaths();
  const posts = postPaths
    .map((path) => getPostByPath(path, fields))
    .sort((post1, post2) => (Date(post1.date) > Date(post2.date) ? 1 : -1))
    .slice((page - 1) * 10, page * 10);

  return posts;
}

export const PAGE_COUNT = Math.ceil(getPostPaths().length / 10);
