import { ABeeZee } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import styles from "./home.module.css";

const abeezee = ABeeZee({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "GES Foundation",
  description:
    "GES Foundation is a compassionate non-governmental organization committed to creating positive change in communities. With a mission rooted in humanitarian values, we address pressing social issues in health, education, child protection, wash shelter, legal services, and more. Join us in fostering a better world through impactful initiatives for those in need.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={abeezee.className}>
        <main>
          <Header />
        </main>
        <section className={styles.bodyContainer}>{children}</section>
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
