import styles from "./trustees.module.css";
import Trustees from "./Trustees";
const page = () => {
  return (
    <div className={styles.trusteeContainer}>
      <div className={styles.topHeader}>
        <h1>Board of Trustees</h1>
      </div>
      <div className={styles.trustee}>
        <Trustees />
        <Trustees />
        <Trustees />
        <Trustees />
        <Trustees />
      </div>
    </div>
  );
};

export default page;
