import Image from "next/image";
import styles from "./trustees.module.css";
const Trustees = ({ name, title, src }) => {
  return (
    <div className={styles.trusteeDetails}>
      <Image src={src} height={350} width={350} alt={name} />
      <h3>{name}</h3>
      <h3>{title}</h3>
    </div>
  );
};

export default Trustees;
