import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.excerpt,
      image: matterResult.data.cover_image,
      slug: fileName.replace(".md", ""),
    };
  });

  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return sortedPosts;
};

export default getPostMetadata;
