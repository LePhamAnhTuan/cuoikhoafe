import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { https } from "../services/config";
const AdminTemplate = () => {
  return (
    <div>
      <div className="header_admin1 h-14">
        <div className="bg-white h-full drop-shadow-md">
          <nav className="drop-shadow border-gray-200 ">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto m-4 sm:flex sm:justify-between ">
              <p className="flex items-center sm:text-sm ">
                <i
                  className="fa-brands fa-airbnb sm:text-sm"
                  style={{ color: "#ff5a1f", fontSize: "40px" }}
                />

                <span className="self-center font-bold text-orange-500 text-3xl whitespace-nowrap ml-3 sm:text-sm">
                  airbnb
                </span>
              </p>
            </div>
          </nav>
        </div>
      </div>
      <div className="admin_content grid grid-cols-12 ">
        <div className=" bg-gray-800 col-span-2 text-center min-h-screen ">
          <div className="btn_admin w-full my-5">
            <NavLink to="user" className="w-full">
              <button className="text-white w-full py-3 px-5 bg-orange-500 text-sm hover:bg-orange-600 duration-500">
                Người Dùng
              </button>
            </NavLink>
          </div>
          <div className="btn_admin w-full my-5">
            <NavLink to="rent" className="w-full">
              <button className="text-white w-full py-3 px-5 bg-orange-500 text-sm hover:bg-orange-600 duration-500">
                Danh Sách Thuê Phòng
              </button>
            </NavLink>
          </div>
          <div className="btn_admin  my-5">
            <NavLink to="room">
              <button className="text-white w-full py-3 px-5 bg-orange-500 text-sm hover:bg-orange-600 duration-500">
                Danh Sách Phòng
              </button>
            </NavLink>
          </div>
          <div className="btn_admin  my-5">
            <NavLink to="location">
              <button className="text-white w-full py-3 px-5 bg-orange-500 text-sm hover:bg-orange-600 duration-500">
                Địa Điểm
              </button>
            </NavLink>
          </div>
        </div>
        <div className="admin_leftconent col-span-10 m-5 w-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminTemplate;
