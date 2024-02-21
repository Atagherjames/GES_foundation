"use client";

import { useState } from "react";
import Link from "next/link";
import { Collapse } from "antd";
import styles from "./about.module.css";

const AboutPage = () => {
  const [activeKey, setActiveKey] = useState(["1"]);
  const [expandIconPosition, setExpandIconPosition] = useState("end");

  const handlePanelChange = (keys) => {
    setActiveKey(keys);
  };

  const items = [
    {
      key: "1",
      label: "MISSION",
      children: (
        <div className={styles.text}>
          Silver SEG Foundation is dedicated to empowering Nigerian communities
          through targeted investments in health and education. Our mission is
          to collaboratively implement impactful initiatives with NGOs, ensuring
          accessible healthcare and quality education for all. Guided by founder
          Sylvester Ejembi Ikwebe, we strive to create lasting solutions,
          fostering positive change and building a more equitable and prosperous
          future for every individual.
        </div>
      ),
    },
    {
      key: "2",
      label: "VISION",
      children: (
        <div className={styles.text}>
          At Silver SEG Foundation, our vision is a Nigeria where every
          individual, regardless of their background, has the opportunity to
          lead a fulfilled and empowered life. We aspire to be a catalyst for
          positive change, envisioning vibrant communities with accessible
          healthcare and quality education. Our commitment is to build a nation
          where the transformative power of philanthropy creates a sustainable
          impact, paving the way for a brighter and more equitable future for
          all.
        </div>
      ),
    },
    {
      key: "3",
      label: "MAIN GOALS",
      children: (
        <div className={styles.text}>
          <h4>
            At Silver SEG Foundation, our primary goals revolve around creating
            a comprehensive and sustainable impact on the lives of Nigerians. We
            are committed to:
          </h4>
          <ul>
            <li>
              <b>Enhancing Healthcare Access:</b> Ensuring accessible and
              quality healthcare for underserved communities, promoting
              preventive measures, and addressing health disparities.
            </li>
            <li>
              <b>Empowering Through Education:</b> Fostering educational
              opportunities by supporting initiatives that enhance learning
              environments, provide scholarships, and promote skill development.
            </li>

            <li>
              <b> Safeguarding Children:</b> Advocating for and implementing
              measures that protect the rights and well-being of children,
              including initiatives to prevent exploitation, abuse, and ensure a
              safe and nurturing environment.
            </li>
            <li>
              <b>Providing Legal Support:</b> Offering legal services to those
              in need, promoting justice, and advocating for the rights of
              vulnerable individuals and communities.
            </li>
            <li>
              <b> Securing Shelter:</b> Working towards addressing homelessness
              and inadequate housing, providing shelter solutions, and
              contributing to the overall well-being of communities.
            </li>
          </ul>
        </div>
      ),
    },
    {
      key: "4",
      label: "VALUES",
      children: (
        <div className={styles.text}>
          <ul>
            <li>
              <b>Empathy:</b> We approach our work with a deep understanding and
              compassion for the challenges faced by individuals and
              communities, striving to make a positive impact on their lives.
            </li>
            <li>
              <b>Collaboration:</b> We believe in the power of partnerships and
              collaboration, working closely with NGOs, communities, and
              stakeholders to achieve shared goals and maximize our collective
              impact.
            </li>
            <li>
              <b>Integrity:</b> Our commitment to transparency, honesty, and
              ethical conduct guides our actions. We maintain the highest
              standards of integrity in all our interactions and decision-making
              processes.
            </li>
            <li>
              <b>Innovation:</b> We embrace creativity and innovation in finding
              solutions to complex challenges. We continuously seek new and
              effective ways to address issues in health, education, child
              protection, legal services, and shelter.
            </li>
            <li>
              <b>Inclusivity:</b> We value diversity and inclusion, recognizing
              the strength that comes from different perspectives and
              backgrounds. Our programs and initiatives are designed to be
              accessible and beneficial to all.
            </li>
            <li>
              <b>Accountability:</b> We hold ourselves accountable for the
              impact of our actions. Through rigorous monitoring and evaluation,
              we ensure that our efforts result in positive and meaningful
              changes in the lives of those we serve.
            </li>
            <li>
              <b>Resilience:</b> In the face of challenges, we remain resilient
              and committed to our mission. We adapt to evolving needs, learn
              from experiences, and persist in our efforts to create lasting and
              sustainable change.
            </li>
            <li>
              <b>Community-Centric:</b> Grounded in a deep respect for
              communities, we actively involve and engage them in the
              decision-making processes, valuing their insights and empowering
              them to be agents of change in their own right.
            </li>
          </ul>
        </div>
      ),
    },
    {
      key: "5",
      label: "FOCUS AREAS",
      children: (
        <div className={styles.text}>
          <ul>
            <li>
              <Link href="/services/health">Health</Link>
            </li>
            <li>
              <Link href="/services/education">Education</Link>
            </li>

            <li>
              <Link href="/services/childprotection">Child Protection</Link>
            </li>
            <li>
              <Link href="/services/shelter">Wash and Shelter</Link>
            </li>
            <li>
              <Link href="/services/legalservice">Legal Service</Link>
            </li>
          </ul>
        </div>
      ),
    },
    {
      key: "6",
      label: "GRANT MAKING",
      children: (
        <div className={styles.text}>
          The Foundation’s grantmaking approach is catalytic. We work with
          partners to better understand challenges faced by communities where we
          work to design actionable solutions to address identified needs. Our
          grants making process is two pronged:{" "}
          <Link href="/grantmaking/annual">Annual Grants</Link> and
          <Link href="/grantmaking/descritionary"> Discretionary Grants </Link>
        </div>
      ),
    },
    {
      key: "7",
      label: "PARTNERSHIP and COLLABORATION",
      children: (
        <div className={styles.text}>
          The Foundation is aware of important actors and individuals working
          actively in its focus areas and we employ networking and partnership
          building as tools to expand our reach. We work towards establishing a
          wide array of collaborative relationships aimed at leveraging
          additional human and material resources to maximise our impact.
        </div>
      ),
    },
  ];

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.topHeader}>
        <h1>About the Foundation</h1>
      </div>
      <div className={styles.aboutBody}>
        <div className={styles.textContainer}>
          <p>
            Silver SEG Foundation, founded in 2024 by visionary leader Sylvester
            Ejembi Ikwebe, stands as a beacon of philanthropy in Nigeria. Our
            mission is to uplift communities through strategic support for
            health and education initiatives led by reputable Non-governmental
            Organizations (NGOs). Headquartered in Nassarawa State, specifically
            in One Man Village, we strategically position ourselves to oversee
            and facilitate transformative projects.
          </p>
          <br />
          <p>
            Regional offices further extend our reach, ensuring effective
            coordination and implementation of initiatives across key areas. At
            Silver SEG Foundation, we are driven by a passion for positive
            change, and our commitment is to create a lasting legacy of
            empowerment, building a brighter future for all Nigerians.
          </p>
        </div>
        <div className={styles.collapseContainer}>
          <Collapse
            activeKey={activeKey}
            expandIconPosition={expandIconPosition}
            onChange={handlePanelChange}
            className={styles.collapse}
          >
            {items.map((item) => (
              <Collapse.Panel
                header={
                  <span
                    style={{
                      fontSize: "18px",
                      color: "rgba(43, 102, 185, 0.9)",
                    }}
                  >
                    {item.label}
                  </span>
                }
                key={item.key}
                extra={item.extra}
              >
                {item.children}
              </Collapse.Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
