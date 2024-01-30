import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <section>
        <h3>Head Office – Abuja</h3>
        <p>
          35 Fandriana Close, Off Dar Es Salaam Street,
          <br />
          Aminu Kano Crescent
          <br />
          Wuse II, Abuja-FCT, Nigeria
          <br />
          +234 906 5447 852 <br />
          contact@tydanjumafoundation.org
        </p>
      </section>
      <section>
        <h3>Taraba Office</h3>
        <p>
          Former Ministry of Poverty Alleviation Office, <br />
          Jolly Nyame Street, after Taraba Hotel, <br />
          Jalingo, Taraba State.
          <br />
          +234 811 6548 718
          <br />
          taraba@tydanjumafoundation.org
        </p>
      </section>
      <section>
        <h3>News Letter</h3>
        <form className={styles.form}>
          <span className={styles.formItem}>
            <label>Name:</label>
            <input type="text" />
          </span>
          <span className={styles.formItem}>
            <label>Email: </label>
            <input type="email" />
          </span>
          <button>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Footer;
