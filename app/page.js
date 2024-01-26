"use client";

import styles from "./home.module.css";
import SlideShow from "./components/Swiper";

export default function Home() {
  return (
    <main className={styles.main}>
      <SlideShow />
    </main>
  );
}
