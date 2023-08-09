import React, { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SignIn from "../../pages/SignIn/SignIn";
import { Dropdown, Space, message } from "antd";
import Header from "./Header.scss";
import { setDataName } from "../../redux/slices/userSlice";
import { xoaLocal } from "../../util/localStorage";
const AfterRegister = () => {
  const dispatch = useDispatch();
  const { inFo } = useSelector((state) => state.user);
  // console.log("inFo", inFo);

  const handleMenuClick = (e) => {
    // message.info("Log out Successed");
    console.log("click", e);
  };

  const logOut = () => {
    xoaLocal("user");
    dispatch(setDataName(null));
    alert("Đăng Xuất Thành Công !!!!");
  };

  const items = [
    {
      label: <NavLink to={"/infouser"}>Info user</NavLink>,
      key: "1",
      // icon: navigate("/infouser"),
      icon: <UserOutlined />,
      // <UserOutlined />
    },
    {
      label: "Log out",
      key: "2",
      onClick: logOut,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div>
      {inFo != null ? (
        <Space>
          <Dropdown.Button
            menu={menuProps}
            placement="bottom"
            icon={
              <img
                src={inFo.user?.avatar}
                alt=""
                style={{ width: "100%", height: "100%" }}
              /> ? (
                <img src={inFo.user?.avatar} alt="" />
                // <i className="text-orange-500 font-bold text-sm items-center fa-solid fa-user  "></i>
              ) : (
                <i className="text-orange-500 font-bold text-sm items-center fa-solid fa-user  "></i>
              )
            }
          >
            {
              <span className="text-orange-500 font-bold text-lg ">
                {inFo.user?.name}
              </span>
            }
          </Dropdown.Button>
        </Space>
      ) : (
        <div>
          <div className="btn_dropdown border-orange-500 rounded-2xl border-2 border-solid ">
            <button
              type="button"
              className="flex py-2 px-5   rounded-xl md:mr-0  "
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              {" "}
              <div className="btn_dropdown_menu flex items-center">
                <i
                  className="fa-solid fa-bars text-lg mr-3"
                  style={{ color: "#e15f1f" }}
                />
                <i
                  className="fa-solid fa-user text-lg"
                  style={{ color: "#e15f1f" }}
                />
              </div>
            </button>
          </div>
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y rounded-lg drop-shadow-md dark:divide-gray-600"
            id="user-dropdown"
          >
            {/* <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div> */}
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <SignIn />
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign Out
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AfterRegister;
