"use client";
import styles from "./donation.module.css";
import { Form, Input, Select, Button } from "antd";

import TextArea from "antd/lib/input/TextArea";

const donation = () => {
  return (
    <div className={styles.donationContainer}>
      <section className={styles.donationHeader}></section>
      <section className={styles.donationBody}>
        <h3>
          Thank you for your interest in the work of the Foundation. If you wish
          to support the work of the GES Foundation, please complete the form
          below and we will get back to you.
        </h3>
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
              rules={[
                { required: true, message: "Please enter your last name" },
              ]}
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
                <Select.Option value="ResourcePartner">
                  Resource Partner
                </Select.Option>
                <Select.Option value="NetworkPartner">
                  Network Partner
                </Select.Option>
                <Select.Option value="LearningPartner">
                  Learning Partner
                </Select.Option>
              </Select>
            </Form.Item>

            {/* Final Text Area (required) */}
            <Form.Item
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please drop a message",
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </section>
      </section>
    </div>
  );
};

export default donation;
