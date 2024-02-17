import styles from "./trustees.module.css";
import Trustees from "./Trustees";
const page = () => {
  return (
    <div className={styles.trusteeContainer}>
      <div className={styles.topHeader}>
        <h1>Board of Trustees</h1>
      </div>
      <div className={styles.trustee}>
        <Trustees
          name="Mr Sylvester Ejembi Ikwebe"
          title="CEO / Board Chairman"
          src="/asset/Ikwebe.jpg"
        />
        <Trustees
          name="Miss Victory Ebo Ikwebe"
          title="Board Secretary"
          src="/asset/Victory.jpg"
        />
        <Trustees
          name="Mr Ese Esther Freeborn"
          title="Member"
          src="/asset/Ese.jpg"
        />
        <Trustees
          name="Master Ikwebe Wisdom Ikwebe"
          title="Member"
          src="/asset/Wisdom.jpg"
        />
      </div>
    </div>
  );
};

export default page;
