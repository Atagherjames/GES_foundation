"use client";
import styles from "./aboutus.module.css";

import { TeamOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Button } from "@mui/material";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.serviceContainer}>
      <div className={styles.topHeader}>
        <h1>Who We Are</h1>
      </div>
      <div className={styles.programBody}>
        <div className={styles.cardContainer}>
          <Link href={"/aboutus/about"}>
            <div className={styles.card}>
              <p className={styles.iconContainer}>
                <InfoCircleOutlined className={styles.icon} />
              </p>
              <h2>About the Foundation</h2>
              <p>
                The Foundation champions initiatives throughout Nigeria by
                inviting NGOs to seek funding for executing projects within its
                designated focus areas of Health, Education, Housing.
                Interventions supported by this grant are open for
                implementation in any state across Nigeria.
              </p>
            </div>
            <p>
              <Button variant="outlined" className={styles.btnContainer}>
                READ MORE
              </Button>
            </p>
          </Link>

          <Link href={"/aboutus/trustees"}>
            <div className={styles.card}>
              <p className={styles.iconContainer}>
                <TeamOutlined className={styles.icon} />
              </p>
              <h2>Board of Trustees</h2>
              <p>
                The grant is available throughout the year to enable swift
                responses to humanitarian crises in Nigeria and to support
                interventions aligned with the Foundation's focus areas.
              </p>
            </div>
            <p>
              <Button variant="outlined" className={styles.btnContainer}>
                READ MORE
              </Button>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
