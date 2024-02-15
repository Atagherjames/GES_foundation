import Image from "next/image";
import styles from "./trustees.module.css";
const Trustees = () => {
  return (
    <div className={styles.trusteeDetails}>
      <Image src="/asset/donation.jpg" height={350} width={350} alt="trustee" />
      <h3>Dr Name Name</h3>
      <h3>Trustee</h3>
    </div>
  );
};

export default Trustees;
