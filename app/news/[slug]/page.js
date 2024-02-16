import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../newsComponent/getPostMetaData";
import Image from "next/image";
import styles from "./post.module.css";

const getPostContent = (post) => {
  const folder = "posts/";
  const file = `${folder}${post}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const page = ({ params }) => {
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <div className={styles.postContainer}>
      <div className={styles.postBody}>
        <div className={styles.card}>
          <Image
            src={post.data.cover_image}
            alt={post.slug}
            height={300}
            width={300}
          />

          <div className={styles.postDate}>Posted on {post.data.date}</div>

          <h3 className={styles.postTitle}>{post.data.title}</h3>
          <section>
            <Markdown>{post.content}</Markdown>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
