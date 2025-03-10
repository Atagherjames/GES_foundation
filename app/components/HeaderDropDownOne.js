"use client";

import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, theme } from "antd";
import Link from "next/link";
const { useToken } = theme;
const items = [
  {
    key: "1",
    label: <Link href={"/aboutus/about"}>About the Foundation</Link>,
  },
  {
    key: "2",
    label: <Link href={"/aboutus/trustees"}>Board of Trustees</Link>,
    disabled: false,
  },
];
const HeaderDropDown = () => {
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
      <Link href={"/aboutus"}>
        <Space>
          WHO WE ARE
          <DownOutlined />
        </Space>
      </Link>
    </Dropdown>
  );
};
export default HeaderDropDown;
