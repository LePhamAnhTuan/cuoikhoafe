import React, { useState } from "react";
import HeaderModal from "../HeaderModal/HeaderModal";
import "./Header.scss";
import { Drawer } from "antd";

const Header = () => {
  // const [open, setOpen] = useState(false);
  const [active, setactive] = useState(true);
  // const changeInput = () => {
  //   setactive(false);
  // };
  // const closeInput = () => {
  //   setactive(false);
  // };

  return (
    <div className="header">
      <div className="container-lg ">
        <div className="bg-white drop-shadow-md fixed w-full z-999">
          <nav className="drop-shadow border-gray-200 ">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 sm:flex sm:justify-between ">
              <a href="#" className="logo flex items-center sm:text-sm ">
                <i
                  className="fa-brands fa-airbnb sm:text-sm"
                  style={{ color: "#ff5a1f", fontSize: "40px" }}
                />

                <span className="self-center font-bold text-orange-500 text-3xl whitespace-nowrap ml-3 sm:text-sm">
                  airbnb
                </span>
              </a>
              {/* {active ? (
                <button
                  onClick={() => {
                    setactive(false);
                  }}
                  className="block px-3 py- rounded-2xl w-auto md:flex md:w-auto lg:flex sm:flex sm:w-auto "
                  id="navbar-user"
                >
                  <ul className="flex justify-center font-medium md:p-0 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                    <li className="btn_header">
                      <a
                        href=""
                        className="btn_header_navbar block py-2 pl-3 pr-4 text-black rounded md:p-0 hover:text-white duration-200"
                        aria-current="page"
                      >
                        Địa chỉ bất kỳ
                      </a>
                    </li>
                    <li className="btn_header">
                      <a
                        href=""
                        className="btn_header_navbar block py-2 pl-3 pr-4 text-black rounded md:p-0 hover:text-white duration-200"
                      >
                        Tuần bất kỳ
                      </a>
                    </li>
                    <li className="flex items-center">
                      <a
                        href=""
                        className="block py-2 pl-3 pr-4 text-black rounded  md:p-0 hover:text-white duration-200"
                      >
                        Thêm khách hàng
                        <i className="fa-solid fa-magnifying-glass text-white ml-4"></i>
                      </a>
                    </li>
                  </ul>
                </button>
              ) : (
                <div className="showInput flex flex-col">
                  <div
                    onClick={() => {
                      setactive(true);
                    }}
                    className="flex flex-wrap items-center justify-center gap-5 mb-3 "
                  >
                    <a href="/">Chỗ ở</a>
                    <a href="/">Trải nghiệm</a>
                    <a href="/">Trải nghiệm thực tế</a>
                  </div>
                  <form className="showInput flex flex-wrap justify-center items-center py-5">
                    <div className="flex  justify-center items-center relative  transition-all duration-300 h-16 rounded-full border  ">
                      <div className="px-5  hover:bg-gray-300 rounded-full h-full flex  justify-center items-center">
                        <span htmlFor="">Địa điểm</span>
                        <form>
                          <select className="ml-2 border-none">
                            <option value=""></option>
                            <option value="">hihi</option>
                            <option value="">haha</option>
                            <option value="">hihi</option>
                          </select>
                        </form>
                      </div>

                      <div className=" sm:block  px-5 hover:bg-gray-300 rounded-full overflow-hidden h-full ">
                        <label htmlFor="">Nhận Phòng</label>
                        <input
                          className="bg-white boder-color-white outline-none w-full "
                          type="date"
                        />
                      </div>

                      <div className=" sm:block  px-5 hover:bg-gray-300 rounded-full overflow-hidden h-full ">
                        <form>
                          <label htmlFor="">Trả Phòng</label>
                          <input type="date" />
                        </form>
                      </div>
                      <div className=" sm:block  px-5  hover:bg-gray-300 rounded-full overflow-hidden h-full ">
                        <form>
                          <label htmlFor="">Khách</label>
                          <input type="number" />
                        </form>
                      </div>

                      <button className="py-2 px-4 rounded-full bg-orange-500">
                        Tìm kiếm
                      </button>
                    </div>
                  </form>
                </div>
              )} */}

              <button
                className="block px-3 py- rounded-2xl w-auto md:flex md:w-auto lg:flex sm:flex sm:w-auto "
                id="navbar-user"
              >
                <ul className="flex justify-center font-medium md:p-0 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                  <li className="btn_header">
                    <a
                      href="#"
                      className="btn_header_navbar block py-2 pl-3 pr-4 text-black rounded md:p-0 hover:text-white duration-200"
                      aria-current="page"
                    >
                      Địa chỉ bất kỳ
                    </a>
                  </li>
                  <li className="btn_header">
                    <a
                      href="#"
                      className="btn_header_navbar block py-2 pl-3 pr-4 text-black rounded md:p-0 hover:text-white duration-200"
                    >
                      Tuần bất kỳ
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-black rounded  md:p-0 hover:text-white duration-200"
                    >
                      Thêm khách hàng
                      <i className="fa-solid fa-magnifying-glass text-white ml-4"></i>
                    </a>
                  </li>
                </ul>
              </button>

              {/* <div
                active={active}
                onClick={closeInput}
                className="flex flex-col"
              >
                <div className="flex items-start justify-between p-4 gap-8 ">
                  <a href="/">Chỗ ở</a>
                  <a href="/">Trải nghiệm</a>
                  <a href="/">Trải nghiệm thực tế</a>
                </div>
                <div className="showInput rounded-full border-2 border-solid border-gay-300 py-4 px-2 flex justify-between items-center gap-3">
                  <div className="">
                    <form>
                      <label htmlFor="">Địa điểm</label>
                      <select className="ml-2 border-none">
                        <option value=""></option>
                        <option value="">hihi</option>
                        <option value="">haha</option>
                        <option value="">hihi</option>
                      </select>
                    </form>
                  </div>
                  <div>
                    <form>
                      <label htmlFor="">Nhận Phòng</label>
                      <input type="date" />
                    </form>
                  </div>
                  <div>
                    <form>
                      <label htmlFor="">Trả Phòng</label>
                      <input type="date" />
                    </form>
                  </div>
                  <div>
                    <form>
                      <label htmlFor="">Khách</label>
                      <input type="number" />
                    </form>
                  </div>
                  <button className="py-2 px-4 rounded-full bg-orange-500">
                    Tìm kiếm
                  </button>
                </div>
              </div> */}

              {/* <HeaderModal /> */}

              <div className="flex items-center">
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

                {/* Dropdown menu */}
                <div
                  className="z-100 hidden my-4 text-base list-none bg-white divide-y rounded-lg drop-shadow-md dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <div className="px-4 py-3 ">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      name@flowbite.com
                    </span>
                  </div>
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
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* <div className="icon_datphong  drop-shadow-md"> */}
        {/* <button className="px-5">
          <i className="fa-solid fa-house-flag text-3xl"></i>
        </button>
        <button className="px-5">
          <i className="fa-solid fa-house-flag text-3xl"></i>
        </button>
        <button className="px-5">
          <i className="fa-solid fa-house-flag text-3xl"></i>
        </button>
        <button className="px-5">
          <i className="fa-solid fa-house-flag text-3xl"></i>
        </button> */}
        {/* <a href="#" className="table:text-red-400">
          123
        </a> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Header;
