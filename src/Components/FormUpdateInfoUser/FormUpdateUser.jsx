import { Drawer } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UpdateItems from "./UpdateItems";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUser,
  getInfoUserApi,
  layInFoUser,
} from "../../redux/slices/adminUserSlices";
import { layDuLieuLocal } from "../../util/localStorage";

const FormUpdateUser = () => {
  const id = layDuLieuLocal("user").user?.id;
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // --------------
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllUser());
  // }, []);

  return (
    <div>
      <div className="flex flex-row justify-between  items-center mr-2">
        <h3 className=" my-2">Phòng Đã Book</h3>
        <NavLink id="update" onClick={showDrawer} className="">
          <button
            onClick={() => {
              dispatch(getInfoUserApi(id));
            }}
            className="my-2 px-4 py-2 animated-button1 bg-white shadow-sm border rounded-md hover:bg-slate-50 hover:text-orange-500 transition duration-700"
          >
            <i class="fa-solid fa-pen-nib"></i>
            <span className="mx-2"> Chỉnh sửa thông tin </span>
          </button>
        </NavLink>
      </div>
      <Drawer
        title="Chỉnh sửa thông Tin người dùng"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <UpdateItems />
      </Drawer>
    </div>
  );
};

export default FormUpdateUser;
