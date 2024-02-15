"use client";
import styles from "./contact.module.css";
import { Card, Avatar } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Form, Input, Select, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";

const page = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.topHeader}>
        <h1>Contact Us</h1>
      </div>
      <div className={styles.donationBody}>
        <div className={styles.address}>
          <Card
            bordered={false}
            style={{
              width: 300,
            }}
            title={
              <span>
                <Avatar
                  size={40}
                  icon={<EnvironmentOutlined />}
                  style={{ marginRight: 8 }}
                />
                Card title
              </span>
            }
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <section className={styles.contactInfo}>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1219999296577!2d7.580669999999999!3d9.052635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e098efac0a49f%3A0x3a5719dd5d3360c5!2sGbagalape%20living%20faith%20nyanya!5e0!3m2!1sen!2sng!4v1706619373896!5m2!1sen!2sng"
              width="800"
              height="500"
              style={{ border: 1 }}
              loading="lazy"
            ></iframe>
          </div>

          <div className={styles.contactForm}>
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
                  {
                    required: true,
                    message: "Please enter your email address",
                  },
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
                <TextArea rows={4} />
              </Form.Item>

              {/* Submit Button */}
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
