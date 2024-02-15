import styles from "./grantlink.module.css";
import Link from "next/link";

const GrantNavLink = () => {
  return (
    <div className={styles.navContainer}>
      <Link href="/grantmaking/annual" className={styles.nav}>
        About Annual Grant
      </Link>
      <Link href="/grantmaking/annual/eligibility" className={styles.nav}>
        Eligibility
      </Link>
      <Link href="/grantmaking/annual/howtoapply" className={styles.nav}>
        How to apply
      </Link>
    </div>
  );
};

export default GrantNavLink;
