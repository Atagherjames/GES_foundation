import styles from "./shelter.module.css";

const page = () => {
  return (
    <div className={styles.shelterContainer}>
      <div className={styles.topHeader}>
        <div>
          <h1>Wash and Shelter</h1>
          <p>providing shelter for the homeless</p>
        </div>
      </div>
      <section className={styles.shelterBody}>
        <article>
          <section>
            <p className={styles.textHead}>
              At GES Foundation, we are passionately committed to making a
              tangible difference in the lives of the less privileged.
              Recognizing the challenges they face, we believe in creating a
              world where everyone, regardless of their socio-economic status,
              has access to a safe and secure shelter.
            </p>
          </section>

          <section>
            <h2>Ensuring Shelter Security:</h2>
            <p>
              GES Foundation is dedicated to providing secure and stable shelter
              for the less privileged. We understand that having a safe and
              stable place to call home is fundamental to their well-being and
              dignity. Our efforts aim to eliminate homelessness and provide a
              foundation for a more secure and promising future.
            </p>
          </section>

          <section>
            <h2>Protection from Exploitation:</h2>
            <p>
              Our commitment extends to protecting the less privileged from
              exploitation and precarious living conditions. Through rigorous
              enforcement of housing rights and impactful awareness campaigns,
              GES Foundation strives to eradicate homelessness and ensure a
              secure and dignified living environment for every individual.
            </p>
          </section>

          <section>
            <h2>Access to Essential Services:</h2>
            <p>
              GES Foundation not only provides shelter but also ensures access
              to essential services. We work towards creating holistic support
              systems, including healthcare, nutrition programs, and community
              resources, to uplift the overall well-being of the less privileged
              individuals in our care.
            </p>
          </section>

          <section>
            <h2>Building Communities, Fostering Hope:</h2>
            <p>
              Beyond providing shelter, GES Foundation actively works to build
              communities and foster hope. We believe in creating environments
              where the less privileged can thrive, find support, and regain a
              sense of belonging, ultimately empowering them to break free from
              the cycle of poverty.
            </p>
          </section>
        </article>
      </section>
    </div>
  );
};

export default page;
