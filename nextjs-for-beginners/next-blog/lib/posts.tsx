import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullpath = path.join(postsDirectory, fileName);
    const filecontents = fs.readFileSync(fullpath, "utf8");
    const matterresult = matter(filecontents);
    const blogPost: BlogPost = {
      id,
      title: matterresult.data.title,
      date: matterresult.data.date,
    };

    return blogPost;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
