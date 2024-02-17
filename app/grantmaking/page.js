"use client";
import styles from "./grantmaking.module.css";
import { Button } from "@mui/material";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.grantMakingContainer}>
      <div className={styles.topHeader}>
        <div>
          <h1>Grant making</h1>
          <p>
            The Foundation’s grantmaking approach is catalytic. We work with
            partners to better understand challenges faced by communities where
            we work to design actionable solutions to address identified needs.
            Our grants making process is two pronged; Annual Grants and
            Discretionary Grants
          </p>
        </div>
      </div>
      <div className={styles.programBody}>
        <div className={styles.cardContainer}>
          <Link href={"/grantmaking/annual"} className={styles.linkStyle}>
            <div className={styles.card}>
              <h2>Annual Grant</h2>
              <p>
                The Foundation champions initiatives throughout Nigeria by
                inviting NGOs to seek funding for executing projects within its
                designated focus areas of Health, Education, Housing.
                Interventions supported by this grant are open for
                implementation in any state across Nigeria.
              </p>
            </div>
            <p className={styles.btnContainer}>
              <Button variant="outlined">Apply for Grant</Button>
            </p>
          </Link>

          <Link
            href={"/grantmaking/descritionary"}
            className={styles.linkStyle}
          >
            <div className={styles.card}>
              <h2>Descretionary Grant</h2>
              <p>
                The Foundation champions initiatives throughout Nigeria by
                inviting NGOs to seek funding for executing projects within its
                designated focus areas of Health, Education, Housing.
                Interventions supported by this grant are open for
                implementation in any state across Nigeria.
              </p>
            </div>
            <p className={styles.btnContainer}>
              <Button variant="outlined">Apply for Grant</Button>
            </p>
          </Link>

          <Link href={"/grantmaking/partnership"} className={styles.linkStyle}>
            <div className={styles.card}>
              <h2>Partnership and Collaboration</h2>
              <p>
                The Foundation champions initiatives throughout Nigeria by
                inviting NGOs to seek funding for executing projects within its
                designated focus areas of Health, Education, Housing.
                Interventions supported by this grant are open for
                implementation in any state across Nigeria.
              </p>
            </div>
            <p className={styles.btnContainer}>
              <Button variant="outlined">Learn More</Button>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
