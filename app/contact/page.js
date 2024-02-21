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
      <div className={styles.contactBody}>
        <div className={styles.address}>
          <Card
            bordered={false}
            className={styles.card}
            title={
              <span style={{ fontSize: 20, fontWeight: 800 }}>
                <Avatar
                  size={40}
                  icon={<EnvironmentOutlined />}
                  style={{ marginRight: 8 }}
                />
                Contact Us
              </span>
            }
          >
            <p>No. 1, Pathrep Street One man village,</p>
            <p>Karu Local Government area of </p>
            <p>Nassarawa State</p>
            No. 1, Pathrep Street One man village, Karu Local Government area of
            Nassarawa State
          </Card>
        </div>
        <section className={styles.contactInfo}>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63048.55896137939!2d7.5513544!3d9.0148685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e057742910bcd%3A0x8903412a4139096d!2sShopping%20Center%2C%20One%20Man%20Village!5e0!3m2!1sen!2sng!4v1708511514463!5m2!1sen!2sng"
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
