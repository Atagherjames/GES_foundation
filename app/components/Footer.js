import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <h3>Stay Connected</h3>
          <p>
            Subscribe to our newsletter for updates on our projects and
            initiatives.
          </p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className={styles.footerContact}>
          <h3>Contact Us</h3>
          <p>No. 1, Pathrep street One man village</p>
          <p>Karu Local Government Area of </p>
          <p>Nassarawa State</p>
          <p>email@gmail.com</p>
          <p>Phone: 08035808052</p>
        </div>
        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/donation">Donation</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
