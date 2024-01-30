import GrantMaking from "./components/GrantMaking";

import styles from "./home.module.css";
import SlideShow from "./components/Swiper";
import { Card } from "antd";
import Impact from "./components/Impact";
import News from "./components/News";
import Map from "./components/Map";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* slide show */}
      <SlideShow />
      <Impact />
      <GrantMaking />
      <News />
      <Map />
    </main>
  );
}
