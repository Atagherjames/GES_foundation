import { Card } from "antd";
import {
  DollarOutlined,
  DesktopOutlined,
  GlobalOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import styles from "./impact.module.css";
const Impact = () => {
  return (
    <section className={styles.impactContainer}>
      <div className={styles.impactTitle}>
        <h1>OUR IMPACT</h1>
      </div>
      <div className={styles.cardContainer}>
        {/* cards */}
        <Card className={styles.card}>
          <DollarOutlined className={styles.icon} />
          <h1>₦500, 000 </h1>
          <p>Awarded in Grants</p>
        </Card>

        {/* cards */}
        <Card className={styles.card}>
          <DesktopOutlined className={styles.icon} />
          <h1>Over 20 Projects </h1>
          <p>Implemented</p>
        </Card>
        {/* cards */}
        <Card className={styles.card}>
          <GlobalOutlined className={styles.icon} />
          <h1>Across 10 Communities</h1>
          <p>in Nassarawa</p>
        </Card>
        {/* cards */}
        <Card className={styles.card}>
          <TeamOutlined className={styles.icon} />
          <h1>More than 200 </h1>
          <p>People Reached</p>
        </Card>
      </div>
    </section>
  );
};

export default Impact;
