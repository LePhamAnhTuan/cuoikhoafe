import React, { useState } from "react";
import { Drawer } from "antd";
import FormSignIn from "../../Components/FormSignIn/FormSignIn";
import { NavLink } from "react-router-dom";
import style from "./style.scss";
const SignIn = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <NavLink
        id="SignIn"
        onClick={showDrawer}
        className="block  text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
      >
        Đăng Nhập
      </NavLink>
      <Drawer
        className=" flex justify-center"
        title="Đăng Nhập"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <FormSignIn />
      </Drawer>
    </div>
  );
};

export default SignIn;
