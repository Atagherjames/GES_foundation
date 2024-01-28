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
          <h1>$900 Thousand</h1>
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
          <h1>Across 10 States</h1>
          <p>and the FCT</p>
        </Card>
        {/* cards */}
        <Card className={styles.card}>
          <TeamOutlined className={styles.icon} />
          <h1>More than 20 Thousand</h1>
          <p>People Reached</p>
        </Card>
      </div>
    </section>
  );
};

export default Impact;
