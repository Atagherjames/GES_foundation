import styles from "./annual.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <p>
        The Foundation uses the Discretionary Grants to provide succour to
        Nigerians affected by humanitarian emergencies. The Grant is
        administered all year-round to facilitate rapid response across Nigeria
        to people facing humanitarian emergencies or for any other intervention
        as determined by the Foundation’s Board of Trustees.
      </p>
      <div>
        <h4>Goal</h4>
        <p>
          The overarching goal of the discretionary grants scheme is to ensure
          responsiveness by the Foundation to legitimate needs that arise
          between board meetings and before or after the annual call for concept
          notes.
        </p>
      </div>
      <div>
        <h4>Types of Projects Supported</h4>
        <p>Projects to be considered for discretionary grants must:</p>
        <ol>
          <li>
            Fall within the Foundation’s focus areas (Health, Education, and
            Shelter);
          </li>
          <li>
            Clearly identify a problem, propose solutions and outline target
            beneficiaries;
          </li>
          <li>
            Be rapid or short term with measurable outcomes and a concrete
            impact on communities;
          </li>
          <li>Project the work of the Foundation.</li>
        </ol>
      </div>
    </div>
  );
};

export default page;
