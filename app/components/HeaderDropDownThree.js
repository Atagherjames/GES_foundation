// "use client";

import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Divider, Button, theme } from "antd";
import Link from "next/link";
const { useToken } = theme;
const items = [
  {
    key: "1",
    label: <Link href={"/"}>Annual Grant</Link>,
  },
  {
    key: "2",
    label: <Link href={"/"}>Discretionary Grant</Link>,
    disabled: false,
  },
  {
    key: "3",
    label: <Link href={"/"}>Partnerships</Link>,
    disabled: false,
  },
];
const HeaderDropDownThree = () => {
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
          {/* <Divider
            style={{
              margin: 0,
            }}
          /> */}
          <Space
            style={{
              padding: 8,
            }}
          ></Space>
        </div>
      )}
    >
      <Link href={"/"}>
        <Space>
          GRANTMAKING
          <DownOutlined />
        </Space>
      </Link>
    </Dropdown>
  );
};
export default HeaderDropDownThree;
