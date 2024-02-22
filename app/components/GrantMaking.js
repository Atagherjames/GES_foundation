import styles from "./grantmaking.module.css";
import Link from "next/link";
import { CarryOutOutlined, ShoppingFilled } from "@ant-design/icons";

const GrantMaking = () => {
  return (
    <div className={styles.grantContainer}>
      <h1>GRANTMAKING</h1>
      <div className={styles.cardContainer}>
        <Link href={"/grantmaking/annual"}>
          <div className={styles.card}>
            <CarryOutOutlined className={styles.icon} />
            <h2>Annual Grant</h2>
            <p>
              The Foundation champions initiatives throughout Nigeria by
              inviting NGOs to seek funding for executing projects within its
              designated focus areas of Health, Education, Housing.
              Interventions supported by this grant are open for implementation
              in any state across Nigeria.
            </p>
          </div>
        </Link>

        <Link href={"/grantmaking/descritionary"}>
          <div className={styles.card}>
            <ShoppingFilled className={styles.icon} />
            <h2>Discretionary Grants</h2>
            <p>
              The grant is available throughout the year to enable swift
              responses to humanitarian crises in Nigeria and to support
              interventions aligned with the Foundation's focus areas.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GrantMaking;
