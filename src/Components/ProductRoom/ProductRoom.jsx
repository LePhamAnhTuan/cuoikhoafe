import React, { useEffect } from "react";
import "./ProductRoom.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoomAPI } from "../../redux/slices/roomSLices";
import Carousel from "react-elastic-carousel";
import {
  AiTwotoneStar,
  AiOutlineHeart,
  AiTwotoneHeart,
  AiFillHeart,
} from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import {
  set_loading_end,
  set_loading_started,
} from "../../redux/slices/loadingSlice";
import { layDuLieuLocal } from "../../util/localStorage";
import { getInfoUserApi } from "../../redux/slices/adminUserSlices";
import { findRoomUser } from "../../redux/slices/commentUserSlice";
// import { click } from "@testing-library/user-event/dist/click";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

const ProductRoom = () => {
  const maNguoiDung = layDuLieuLocal("user")?.user.id;
  const dispatch = useDispatch();
  const { arrayRoom } = useSelector((state) => state.room);
  // const { inFo } = useSelector((state) => state.user);
  //   console.log("room: ", room);
  // const checkLogin = () => {
  //   if (inFo == null) {
  //     document.getElementById("SignIn").click();
  //   }else {
  //     // to = {`/details/${id}`}
  //   }
  // }

  useEffect(() => {
    dispatch(set_loading_started());
    dispatch(getAllRoomAPI());
    dispatch(set_loading_end());
    dispatch(getInfoUserApi(maNguoiDung));
  }, []);
  // const xetDK = () => {
  //   console.log("nhấn đi");
  //   const doc = document.getElementById("SignIn");
  //   if (doc) {
  //     console.log("nhấn đi 2");
  //     doc.addEventListener("click", () => {});
  //   }
  // };
  // const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 gap-11 " id="Product">
      {arrayRoom.map(({ tenPhong, moTa, giaTien, hinhAnh, id }, index) => {
        // console.log(id);
        return (
          <div className="product_item" key={index}>
            {/* <Carousel breakPoints={breakPoints}>
              <img width={"500px"} height={"350px"} src={hinhAnh} alt="" />
              <img width={"500px"} height={"350px"} src={hinhAnh} alt="" />
            </Carousel> */}
            <div className="image_item ">
              <img width={"500px"} height={"350px"} src={hinhAnh} alt="" />
            </div>
            <AiFillHeart className="heart text-xl hover:text-orange-500 " />
            <div className="sub_title">
              <div className="name_price mt-2 ml-2">
                <h3 className="">
                  <span className="font-bold">Tên phòng: </span> {tenPhong}
                </h3>
                <p className="flex items-center mr-3 ">
                  <AiTwotoneStar className="icon mr-1 duration-500 cursor-pointer" />{" "}
                  5.00
                </p>
              </div>
              <div className="ml-2 mt-2 flex items-center justify-between">
                <p>
                  <span className="font-bold">Giá phòng: </span> ${giaTien}/đêm
                </p>

                <NavLink
                  to={`/detail/${id}`}
                  // onClick={() => {
                  //   dispatch(findRoomUser(id));
                  // }}
                  className="btnChiTiet py-2 px-4 border  duration-500 mr-3 "
                >
                  Xem chi tiết
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductRoom;
