"use client";
import styles from "./programes.module.css";

import {
  HeartOutlined,
  ReadOutlined,
  SafetyCertificateOutlined,
  HomeOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { Button } from "@mui/material";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.serviceContainer}>
      <div className={styles.topHeader}>
        <h1>Services</h1>
      </div>
      <div className={styles.programBody}>
        <div className={styles.cardContainer}>
          <Link href={"/services/health"}>
            <div className={styles.card}>
              <p className={styles.iconContainer}>
                <HeartOutlined className={styles.icon} />
              </p>
              <h2>Health Services</h2>
              <p>
                In a world marked by socio-economic disparities, organizations
                like GES Foundation stand out as beacons of hope, dedicated to
                making a tangible difference in the lives of those less
                privileged. GES Foundation has made its mission to address the
                fundamental human right to quality healthcare for all, aiming to
                bridge the gap in access to medical services.
              </p>
            </div>
            <p className={styles.btnContainer}>
              <Button variant="outlined">READ MORE</Button>
            </p>
          </Link>

          <Link href={"/services/education"}>
            <div className={styles.card}>
              <p className={styles.iconContainer}>
                <ReadOutlined className={styles.icon} />
              </p>
              <h2>Schools and Education</h2>
              <p>
                In a world characterized by socio-economic disparities,
                organizations like GES Foundation stand out as beacons of hope,
                dedicated to making a tangible difference in the lives of those
                less privileged. GES Foundation has made its mission to address
                the fundamental human right to quality education for all, aiming
                to bridge the gap in access to educational opportunities.
              </p>
            </div>
            <p className={styles.btnContainer}>
              <Button variant="outlined">READ MORE</Button>
            </p>
          </Link>

          <Link href={"/services/childprotection"}>
            <div className={styles.card}>
              <p className={styles.iconContainer}>
                <SafetyCertificateOutlined className={styles.icon} />
              </p>
              <h2>GBV and Child Protection Services</h2>
              <p>
                At GES Foundation, we are passionately committed to ensuring the
                protection of children's rights. Recognizing their
                vulnerability, we believe in creating a world where every child
                can thrive, grow, and realize their full potential, free from
                any form of harm or exploitation.
              </p>
            </div>
            <p className={styles.btnContainer}>
              <Button variant="outlined">READ MORE</Button>
            </p>
          </Link>

          <Link href={"/services/shelter"}>
            <div className={styles.card}>
              <p className={styles.iconContainer}>
                <HomeOutlined className={styles.icon} />
              </p>
              <h2>Wash and Shelter</h2>
              <p>
                At GES Foundation, we are passionately committed to making a
                tangible difference in the lives of the less privileged.
                Recognizing the challenges they face, we believe in creating a
                world where everyone, regardless of their socio-economic status,
                has access to a safe and secure shelter.
              </p>
            </div>
            <p className={styles.btnContainer}>
              <Button variant="outlined">READ MORE</Button>
            </p>
          </Link>

          <Link href={"/services/legalservice"}>
            <div className={styles.card}>
              <p className={styles.iconContainer}>
                <BankOutlined className={styles.icon} />
              </p>
              <h2>Legal Services</h2>
              <p>
                At GES Foundation, we are fervently dedicated to empowering the
                less privileged through the provision of comprehensive legal
                services. Recognizing the challenges they face, we believe in
                creating a world where everyone, regardless of their
                socio-economic status, has access to justice and legal
                representation.
              </p>
            </div>
            <p className={styles.btnContainer}>
              <Button variant="outlined">READ MORE</Button>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
