import React, { useEffect } from "react";
import "./ProductRoom.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoomAPI } from "../../redux/slice/roomSLices";
import Carousel from "react-elastic-carousel";
import {
  AiTwotoneStar,
  AiOutlineHeart,
  AiTwotoneHeart,
  AiFillHeart,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

const ProductRoom = () => {
  const dispatch = useDispatch();
  const { room } = useSelector((state) => state.room);
  //   console.log("room: ", room);

  useEffect(() => {
    dispatch(getAllRoomAPI());
  });
  return (
    <div className="grid grid-cols-2 gap-11" id="Product">
      {room.map(({ tenPhong, moTa, giaTien, hinhAnh, id }, index) => {
        return (
          <div className="product_item" key={index}>
            <Carousel breakPoints={breakPoints}>
              <img width={"500px"} height={"350px"} src={hinhAnh} alt="" />
              <img width={"500px"} height={"350px"} src={hinhAnh} alt="" />
              <img width={"500px"} height={"350px"} src={hinhAnh} alt="" />
            </Carousel>
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
                  <span className="font-bold">Giá phòng: </span> ${giaTien}/1
                  đêm
                </p>
                <NavLink
                  to={`/details/${id}`}
                  className="btnChiTiet py-2 px-4 border rounded-full duration-500 mr-3 "
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
