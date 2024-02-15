import styles from "./childprotection.module.css";
const page = () => {
  return (
    <div className={styles.childProtectionContainer}>
      <div className={styles.topHeader}>
        <div>
          <h1>Child Protection</h1>
          <p>Ensuring that Children Rights are Protected</p>
        </div>
      </div>
      <section className={styles.childProtectionBody}>
        <article>
          <section>
            <p className={styles.textHead}>
              At GES Foundation, we are passionately committed to ensuring the
              protection of children's rights. Recognizing their vulnerability,
              we believe in creating a world where every child can thrive, grow,
              and realize their full potential, free from any form of harm or
              exploitation.
            </p>
          </section>

          <section>
            <h2>The Right to Education:</h2>
            <p>
              GES Foundation is dedicated to providing quality education for
              every child. We work tirelessly to eliminate barriers to access,
              promote inclusive learning environments, and empower children
              through education, setting the foundation for a brighter future.
            </p>
          </section>

          <section>
            <h2>Protection from Exploitation:</h2>
            <p>
              Our commitment extends to protecting children from exploitation,
              including child labor and trafficking. Through rigorous
              enforcement of laws and impactful awareness campaigns, GES
              Foundation strives to eradicate these violations and ensure a
              secure and nurturing environment for every child.
            </p>
          </section>

          <section>
            <h2>Healthcare and Well-being:</h2>
            <p>
              GES Foundation invests in healthcare infrastructure, nutrition
              programs, and preventive care to ensure the well-being of every
              child. We believe that access to proper healthcare is a
              fundamental right that contributes to the overall development and
              happiness of every child.
            </p>
          </section>

          <section>
            <h2>Protection from Violence:</h2>
            <p>
              Every child deserves to live free from violence, abuse, and
              neglect. GES Foundation actively works to create safe spaces
              within homes and communities, fostering an environment where
              children can flourish without fear.
            </p>
          </section>
        </article>
      </section>
    </div>
  );
};

export default page;
