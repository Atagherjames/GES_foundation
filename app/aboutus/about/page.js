"use client";

import { useState } from "react";
import { Collapse } from "antd";
import styles from "./about.module.css";

const AboutPage = () => {
  const [activeKey, setActiveKey] = useState(["1"]);
  const [expandIconPosition, setExpandIconPosition] = useState("end");

  const handlePanelChange = (keys) => {
    setActiveKey(keys);
  };

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  const items = [
    {
      key: "1",
      label: "MISSION",
      children: <div className={styles.text}>{text}</div>,
    },
    {
      key: "2",
      label: "VISION",
      children: <div className={styles.text}>{text}</div>,
    },
    {
      key: "3",
      label: "MAIN GOALS",
      children: <div className={styles.text}>{text}</div>,
    },
    {
      key: "4",
      label: "VALUES",
      children: <div className={styles.text}>{text}</div>,
    },
    {
      key: "5",
      label: "FOCUS AREAS",
      children: <div className={styles.text}>{text}</div>,
    },
    {
      key: "6",
      label: "GRANT MAKING",
      children: <div className={styles.text}>{text}</div>,
    },
    {
      key: "7",
      label: "PARTNERSHIP and COLLABORATION",
      children: <div className={styles.text}>{text}</div>,
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
            TY Danjuma Foundation is a private independent philanthropic
            grantmaking organisation committed to improving the quality of life
            of Nigerians, by supporting health and education interventions
            implemented by Non-governmental Organisations (NGOs) registered and
            working in Nigeria.
          </p>
          <br />
          <p>
            The Foundation was established in 2009 by Lt. Gen. Theophilus Yakubu
            Danjuma, GCON – a retired Nigerian Army Chief of Staff, an astute
            and successful businessman. The Foundation is based in Abuja,
            Nigeria with state offices in Taraba and Edo.
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
