"use client";
import styles from "./parnership.module.css";
import { useState } from "react";
import { Collapse, Form, Input, Select, Button } from "antd";

import { Option } from "antd/lib/mentions";
import TextArea from "antd/lib/input/TextArea";

const Page = () => {
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

  const itemCongrat = [
    {
      key: "1",
      label: "PARTNER WITH US",
      children: (
        <div className={styles.text}>
          Thank you for your interest in the work of the Foundation. If you wish
          to partner with the TY Danjuma Foundation, please complete the form
          below and we will get back to you
        </div>
      ),
    },
  ];

  const items = [
    {
      key: "1",
      label: "RESOURCE PARTNERS",
      children: (
        <div className={styles.text}>
          These are institutions or persons that are able, ready and willing to
          put resources in cash or kind to support project ideas as the basis
          for collaboration. Resource partners envisaged include persons
          interested in our work, other Foundations, National and International
          Development Agencies.
        </div>
      ),
    },
    {
      key: "2",
      label: "NETWORK PARTNERS",
      children: (
        <div className={styles.text}>
          The primary value in Network partners is in co-creating and amplifying
          the work of partnerships. These include associations and coalitions
          that the Foundation belongs to either nationally, regionally or
          globally. These partners co-contribute to network events and
          activities. An example in this category is African Philanthropy Forum
          (APF).
        </div>
      ),
    },
    {
      key: "3",
      label: "LEARNING PARTNERS",
      children: (
        <div className={styles.text}>
          These are partnerships for mutual learning. This type of partnership
          currently exists between TY Danjuma Foundation and the Foundation
          Center of New York.
        </div>
      ),
    },
  ];

  return (
    <div className={styles.partnershipContainer}>
      <div className={styles.topHeader}>
        <h1>Partnership</h1>
      </div>
      <div className={styles.partnerBody}>
        <div className={styles.partnerContainer}>
          <div className={styles.card}>
            <h2>Partnership & Collaboration</h2>
            <p>
              The Foundation is aware of important actors and individuals
              working actively in its focus areas and we employ networking and
              partnership building as tools to expand our reach. We work towards
              establishing a wide array of collaborative relationships aimed at
              leveraging additional human and material resources to maximise our
              impact.
            </p>
          </div>
          <div className={styles.collapseContainer}>
            <h2>Our Partnership Categories</h2>
            <Collapse
              activeKey={activeKey}
              expandIconPosition={expandIconPosition}
              onChange={handlePanelChange}
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
        {/* Partner with us */}
        <div className={styles.partnerCongratulation}>
          <Collapse
            expandIconPosition={expandIconPosition}
            className={styles.collapse}
          >
            {itemCongrat.map((item) => (
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
      {/* partnership form  */}
      <section className={styles.form}>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          // action="your_backend_endpoint_url"
          method="POST"
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please enter your first name" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Please enter your last name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Please enter your email address" },
              {
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[
              { required: true, message: "Please enter your phone number" },
              {
                pattern: /^(0\d{10})$/,
                message: "Please enter a valid phone number",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label=" Your Organization" name="organization">
            <Input />
          </Form.Item>

          <Form.Item
            label="Partnership"
            name="partnership"
            rules={[
              { required: true, message: "Please select a partnership type" },
            ]}
          >
            <Select defaultValue="ResourcePartner">
              <Option value="ResourcePartner">Resource Partner</Option>
              <Option value="NetworkPartner">Network Partner</Option>
              <Option value="LearningPartner">Learning Partner</Option>
            </Select>
          </Form.Item>

          {/* Final Text Area (required) */}
          <Form.Item
            label="Message"
            name="message"
            autoSize={false}
            rules={[
              {
                required: true,
                message: "Please drop a message",
              },
            ]}
          >
            <TextArea rows={4} autoSize={{ minRows: 4, maxRows: 4 }} />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item wrapperCol={{ offset: 8, span: 40 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default Page;
