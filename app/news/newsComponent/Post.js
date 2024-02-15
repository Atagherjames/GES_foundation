import Link from "next/link";
import Image from "next/image";
import styles from "./post.module.css";

export default function Post({ post }) {
  return (
    <div className={styles.card}>
      <Image src={post.image} alt={post.slug} height={300} width={300} />

      <div className={styles.postDate}>Posted on {post.date}</div>

      <h3 className={styles.postTitle}>{post.title}</h3>

      <p>{post.subtitle}</p>

      <Link href={`/news/${post.slug}`}>Read More</Link>
    </div>
  );
}
