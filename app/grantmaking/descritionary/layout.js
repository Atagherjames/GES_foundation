import styles from "./nav.module.css";

import GrantNavLink from "@/app/components/GrantNavLink";
const layout = ({ children }) => {
  return (
    <div className={styles.annualGrantConainer}>
      <div className={styles.topHeader}>
        <h1>Descretionary Grant</h1>
      </div>
      <main className={styles.annualGrantBody}>
        <div className={styles.navLinkContainer}>
          <GrantNavLink />
        </div>
        <div className={styles.children}>{children}</div>
      </main>
    </div>
  );
};

export default layout;
