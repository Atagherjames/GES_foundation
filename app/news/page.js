import styles from "./news.module.css";
import getPostMetadata from "./newsComponent/getPostMetaData";
import Post from "./newsComponent/Post";

const page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <div key={post.slug}>
      <Post post={post} />
    </div>
  ));

  return (
    <div className={styles.newsContainer}>
      <div className={styles.topHeader}>
        <h1>Latest News</h1>
      </div>
      <div className={styles.newsBody}>
        <section className={styles.posts}>{postPreviews}</section>
      </div>
    </div>
  );
};

export default page;
