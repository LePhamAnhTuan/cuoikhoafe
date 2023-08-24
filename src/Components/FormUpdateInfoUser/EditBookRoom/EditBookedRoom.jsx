import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import roomSLices, { findRoomBooker } from "../../../redux/slices/roomSLices";
import { Drawer, message } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { layDuLieuLocal } from "../../../util/localStorage";
import { useFormik } from "formik";
import * as yup from "yup";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { InfoBooking } from "../../../_model/InfoBooking";
import FormUpdate from "../FormUpdate.scss";

const { RangePicker } = DatePicker;

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
      >
        <UpdateInfoBooked />
      </Drawer>
    </div>
  );
};

export default EditBookedRoom;

const UpdateInfoBooked = (props) => {
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();
  const id = props.id;
  const nguoiDung = layDuLieuLocal("user");
  const { editRoom } = useSelector((state) => state.room);
  // console.log("editRoom", editRoom);

  // const date1 = dayjs(date[1]);
  // const date2 = dayjs(date[1]);
  // const totalDate = date2.diff(date1, "day", true);

  const [content, setContent] = useState("");
  let giaTri = editRoom.find((item) => {
    return item;
  });
  // console.log(giaTri);
  useEffect(() => {
    setContent(giaTri ? giaTri : "");
  }, [editRoom]);
  // console.log(content);
  if (giaTri) {
    return (
      <div id="EditBookedRoom">
        {contextHolder}
        <div className="relative z-0 w-full my-5 group">
          <input
            type="text"
            id="editId"
            value={content.id}
            onChange={(event) => setContent(event.target.value)}
            className="block   px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-orange-500 appearance-none dark:text-white dark:border-orange-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-orange-600 dark:text-orange-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            ID
          </label>
        </div>
        <div className="relative z-0 w-full my-5 group">
          <input
            type="text"
            id="editMaNguoiDung"
            value={content.maNguoiDung}
            onChange={(event) => setContent(event.target.value)}
            className="block   px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-orange-500 appearance-none dark:text-white dark:border-orange-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-orange-600 dark:text-orange-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mã Người Dùng
          </label>
        </div>
        <div className="relative z-0 w-full my-5 group">
          <input
            type="text"
            id="editMaPhong"
            value={content.maPhong}
            onChange={(event) => setContent(event.target.value)}
            className="block   px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-orange-500 appearance-none dark:text-white dark:border-orange-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-orange-600 dark:text-orange-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mã Phòng
          </label>
        </div>
        <div className="relative z-0 w-full my-5 group">
          <input
            type="text"
            id="editSoLuongKhach"
            value={content.soLuongKhach}
            onChange={(event) => setContent(event.target.value)}
            className="block   px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-orange-500 appearance-none dark:text-white dark:border-orange-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-orange-600 dark:text-orange-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Số Lượng khách
          </label>
        </div>
        <div className="mt-5">
          <RangePicker
            id="ngayThang"
            style={{
              width: "100%",
              border: "1px solid orange",
              padding: "7px",
            }}
            onChange={(acb) => {
              setContent(acb).map((item) => {
                return dayjs(item).format("DD/MM/YYYY");
              });
            }}
            value={content.ngayDen}
          />
        </div>
        <div className="footer_card mt-5 text-center flex items-center justify-between gap-3">
          <button
            type="submit"
            className="btnDatPhong  w-full py-2 px-4 mt-3 rounded-lg  text-lg font-semibold "
            onClick={() => {
              const infoBooking = new InfoBooking();
              infoBooking.id = document.getElementById("editId").value;
              infoBooking.maPhong =
                document.getElementById("editMaPhong").value;
              infoBooking.maNguoiDung =
                document.getElementById("editMaNguoiDung").value;
              infoBooking.soLuongKhach =
                document.getElementById("editSoLuongKhach").value;
              // infoBooking.ngayDen = date[0];
              // infoBooking.ngayDi = date[1];
              console.log(infoBooking);
              // dispatch(getControlBookApi(infoBooking));
            }}
          >
            Update Đặt Phòng
          </button>
        </div>
        <div className="text-center my-2">
          <span className="text-gray-400 text-center">
            Bạn vẫn chưa bị trừ tiền
          </span>
        </div>
        <hr />
        <div className="my-5">
          <div className="flex">
            <div
              className="w-1/2 text-gray-500 text-lg"
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              {/* <span>{props.giaTien}$</span>
                <span>x{totalDate} Đêm</span> */}
            </div>
            <div className="w-1/2 text-right text-red-700  text-lg">
              {/* {props.giaTien * totalDate} $ */}
            </div>
          </div>
          <div className="flex my-2">
            <div
              className="w-1/2 text-gray-500 text-lg"
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              <span>Phí dịch vụ</span>
            </div>
            <div className="w-1/2 text-right text-red-700  text-lg">0 $</div>
          </div>
          <hr />
          <div className="flex my-2">
            <div
              className="w-1/2 text-gray-500 text-lg"
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              <span>Tổng Cộng </span>
            </div>
            <div className="w-1/2 text-right text-red-700 font-bold text-lg">
              {/* {props.giaTien * totalDate} $ */}
              slslls
            </div>
          </div>
        </div>
      </div>
    );
  }
};
