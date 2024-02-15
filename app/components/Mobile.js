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
            src={"/asset/ges_foundation.png"}
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
            <Link href={"/aboutus"} onClick={() => setOpen(false)}>
              WHO WE ARE
            </Link>
          </li>
          <li>
            <Link href={"/services"} onClick={() => setOpen(false)}>
              SERVICES
            </Link>
          </li>

          <li>
            <Link href={"/grantmaking"} onClick={() => setOpen(false)}>
              GRANTMAKING
            </Link>
          </li>
          <li>
            <Link href={"/news"} onClick={() => setOpen(false)}>
              NEWS
            </Link>
          </li>
          <li>
            <Link href={"/contact"} onClick={() => setOpen(false)}>
              CONTACT US
            </Link>
          </li>
          <li className={`${styles.donateBtn} ${styles.donation}`}>
            <Link href="/donation" onClick={() => setOpen(false)}>
              DONATE
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Mobile;
