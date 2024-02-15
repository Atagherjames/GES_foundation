import { red } from "@mui/material/colors";
import styles from "../annual.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <h4>Download, Complete, and Submit the Application Form</h4>
      <p>
        Download the application form and complete it with proof of registration
        as a non-governmental organization (NGO) along with relevant supporting
        documents to justify the application.
      </p>

      <h4>Attach a Comprehensive Budget</h4>
      <p>
        Ensure you attach a comprehensive budget with notes for the activities
        to be implemented as part of your application.
      </p>

      <h4>Submit Application</h4>
      <p>
        Send the complete application and supporting documents to{" "}
        <a
          href="mailto:contact@tydanjumafoundation.org"
          style={{ color: " rgba(43, 102, 185, 0.9)" }}
        >
          contact@tydanjumafoundation.org
        </a>
      </p>

      <p>
        <strong>Note:</strong> Due to the high volume of grant applications
        received by the Foundation, only applicants under serious consideration
        for funding would be contacted for further discussion.
      </p>
    </div>
  );
};

export default page;
