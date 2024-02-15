import styles from "../annual.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <p>Applicants for discretionary grants must be:</p>
      <ol>
        <li>
          A not-for-profit organisation registered and working in Nigeria;
        </li>
        <li>
          Possess verifiable experience in one of the Foundation’s focus areas
        </li>
        <li>
          Willing to comply with all the Foundation’s internal review processes.
        </li>
      </ol>
    </div>
  );
};

export default page;
