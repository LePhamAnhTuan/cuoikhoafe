import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findRoomBooker } from "../../../redux/slices/roomSLices";
import { Drawer } from "antd";
import { NavLink } from "react-router-dom";

const EditBookedRoom = (props) => {
  const { id } = props;
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

  return (
    <div>
      <div className="">
        <NavLink onClick={showDrawer} className="">
          <button
            onClick={() => {
              dispatch(findRoomBooker(id));
            }}
            className="py-2 px-10  hover:text-white rounded-sm hover:bg-orange-600 duration-500"
          >
            Edit
          </button>
        </NavLink>
      </div>
      <Drawer
        title="Chỉnh sửa Phòng Đã Đặt"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
      ></Drawer>
    </div>
  );
};

export default EditBookedRoom;
