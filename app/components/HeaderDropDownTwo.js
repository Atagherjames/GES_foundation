"use client";

import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Divider, Button, theme } from "antd";
import Link from "next/link";
const { useToken } = theme;
const items = [
  {
    key: "1",
    label: <Link href={"/services/health"}>Health</Link>,
  },
  {
    key: "2",
    label: <Link href={"/services/education"}>Education</Link>,
    disabled: false,
  },
  {
    key: "3",
    label: <Link href={"/services/childprotection"}>Child Protection</Link>,
    disabled: false,
  },
  {
    key: "4",
    label: <Link href={"/services/shelter"}>Wash & Shelter</Link>,
    disabled: false,
  },
  {
    key: "5",
    label: <Link href={"/services/legalservice"}>Legal Services</Link>,
    disabled: false,
  },
];
const HeaderDropDownTwo = () => {
  const { token } = useToken();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: "none",
    boxShadow: token.boxShadowSecondary,
    marginTop: 20,
    padding: 20,
    opacity: 0.9,
  };
  const menuStyle = {
    boxShadow: "none",
  };
  return (
    <Dropdown
      menu={{
        items,
      }}
      dropdownRender={(menu) => (
        <div style={contentStyle}>
          {React.cloneElement(menu, {
            style: menuStyle,
          })}
          <Space
            style={{
              padding: 8,
            }}
          ></Space>
        </div>
      )}
    >
      <Link href={"/services"}>
        <Space>
          SERVICES
          <DownOutlined />
        </Space>
      </Link>
    </Dropdown>
  );
};
export default HeaderDropDownTwo;
