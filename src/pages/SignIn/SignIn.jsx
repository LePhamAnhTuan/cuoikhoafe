import React, { useState } from "react";
import { Drawer } from "antd";
import FormSignIn from "../../Component/FormSignIn/FormSignIn";
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
        onClick={showDrawer}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
      >
        Sign In
      </NavLink>
      <Drawer
        className=" flex justify-center"
        title="Sign in"
        placement="right"
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
