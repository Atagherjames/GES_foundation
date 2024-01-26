import { Divide as Hamburger } from "hamburger-react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Mobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={styles.mobileMenuContainer}>
      <div className={styles.mobileNavHeader}>
        <Link href={"/"}>
          <Image
            src={"/vercel.svg"}
            height={100}
            width={100}
            alt="GES Foundation"
          />
        </Link>
        <Hamburger duration={0.4} toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        className={`${styles.mobileNavLink} ${isOpen ? styles.visible : ""}`}
      >
        <ul>
          <li>
            <Link href={"/"}>WHO WE ARE</Link>
          </li>
          <li>
            <Link href={"/"}>PROGRAMMES</Link>
          </li>
          <li>
            <Link href={"/"}>GRANTMAKING</Link>
          </li>
          <li>
            <Link href={"/"}>CONTACT US</Link>
          </li>
          <li className={`${styles.donateBtn} ${styles.donation}`}>
            <Link href={"/"}>DONATE</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Mobile;
