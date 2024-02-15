"use client";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import HeaderDropDown from "./HeaderDropDownOne";
import HeaderDropDownTwo from "./HeaderDropDownTwo";
import HeaderDropDownThree from "./HeaderDropDownThree";
import Mobile from "./Mobile";
import { useState, useEffect } from "react";

const Header = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 20) {
        setHide(true);
      } else {
        setHide(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header}  ${hide ? styles.headerScrolled : ""}`}
    >
      <section className={styles.headerContainer}>
        <div
          className={`${styles.topHeader}  ${hide ? styles.hideTopBar : ""}`}
        >
          <Image
            src={"/asset/ges_foundation.png"}
            width={140}
            height={140}
            alt="GES Foundation"
          />
        </div>
        <section className={styles.bottomMenu}>
          {/* destop  */}
          <div className={styles.desktop}>
            <ul className={styles.menu}>
              <li>
                <HeaderDropDown />
              </li>
              <li>
                <HeaderDropDownTwo />
              </li>
              <li>
                <HeaderDropDownThree />
              </li>
              <li>
                <Link href={"/news"}>NEWS</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT US</Link>
              </li>
              <li className={styles.donateBtn}>
                <Link href="/donation">DONATE</Link>
              </li>
            </ul>
          </div>

          {/* mobile menu */}
          <div className={styles.mobile}>
            {" "}
            <Mobile />{" "}
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;
