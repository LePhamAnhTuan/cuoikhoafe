import React, { useEffect, useState } from "react";
import { BsTranslate } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import { BiSolidDryer } from "react-icons/bi";
import { GiWashingMachine } from "react-icons/gi";
import { TbIroning1, TbAirConditioning } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import { getDetailRoomAPI } from "../../redux/slices/roomSLices";
import { userCMTAPI } from "../../redux/slices/userSlice";
import PickCanlender from "./PickCanlender";
import { SendOutlined } from "@ant-design/icons";
import { layDuLieuLocal } from "../../util/localStorage";
import { Comment } from "../../_model/Comment";
import { date } from "yup";
import {
  findRoomUser,
  getAllCommentApi,
} from "../../redux/slices/commentUserSlice";
import { getAllUser } from "../../redux/slices/adminUserSlices";
import AddComment from "./Comment/AddComment";
const RoomDetails = () => {
  const dispatch = useDispatch();
  const { room } = useSelector((state) => state.room);
  // const [object, setObject] = useState();
  const params = useParams();
  useEffect(() => {
    dispatch(getDetailRoomAPI(params.id));
    dispatch(getAllCommentApi());
    dispatch(getAllUser());
  }, []);
  // useEffect(() => {
  // }, []);
  const {
    tenPhong,
    khach,
    phongNgu,
    giuong,
    phongTam,
    moTa,
    giaTien,
    mayGiat,
    banLa,
    tivi,
    dieuHoa,
    wifi,
    bep,
    doXe,
    hoBoi,
    hinhAnh,
  } = room;
  return (
    <div id="detailsRoom" className=" h-28 ">
      <div className="mt-24 container px-10 mx-auto  pb-20">
        <div>
          <h1 className="name_room flex items-center">
            <button className="mr-3">
              <BsTranslate />
            </button>
            <p className="name font-semibold  laptop:text-3xl tablet:text-2xl mobile:text-xl text-base ">
              {tenPhong}
            </p>
          </h1>
          <div className="sub_title laptop:flex justify-between items-center laptop:text-[16px] mobile:text-[14px] text-[14px]">
            <div className="sub_title_left flex items-center gap-3">
              <span className="flex items-center">
                <AiFillStar className="mr-2" />4
              </span>
              <span className="underline">99 đánh giá </span>
              <span className="flex items-center">
                <FaAward className="mr-2" />
                Chủ nhà siêu cấp
              </span>
              <span className="ort font-bold underline">Việt Nam</span>
            </div>
            <div className="sub_title_right">
              <button className="mr-3">
                <i className="fa-solid fa-arrow-up-from-bracket mr-2"></i>
                <span>Chia sẻ</span>
              </button>
              <button>
                <i className="fa-regular fa-heart mr-2"></i>
                <span>Lưu</span>
              </button>
            </div>
          </div>
          <div className="image_room mt-5">
            <img src={hinhAnh} alt="" />
          </div>
          <div className="description_room mt-10 border-b pb-5 justify-between laptop:flex tablet:flex w-full sm:flex-row ">
            <div className="description_room_left w-full tablet:w-1/2 laptop:w-3/5 mobile:mb-5 mb-5">
              <div className="title border-b pb-5">
                <h1 className="font-bold text-lg">
                  Toàn bộ căn hộ. Chủ nhà Sungwon
                </h1>
                <p className="text-sm font-normal tracking-widest ">
                  <span>{khach} khách -</span>
                  <span className="mx-1">{phongNgu} phòng ngủ -</span>
                  <span className="mx-1">{phongTam} phòng tắm -</span>
                  <span className="mx-1">{giuong} giường</span>
                </p>
              </div>

              <div className="location_room mt-5 pb-5 border-b">
                <div className="flex w-full">
                  <div className="icon_location pt-2">
                    <i className="fa-solid fa-medal"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold">Sungwon là Chủ nhà siêu cấp</h3>
                    <p>{moTa}</p>
                  </div>
                </div>

                <div className="flex mt-5">
                  <div className="icon_location pt-2">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold">Địa điểm tuyệt vời</h3>
                    <p className="tracking-wider">
                      90% khách gần đây đã xếp hạng 5 sao cho vị trí này.
                    </p>
                  </div>
                </div>
                <div className="flex mt-5 items-center">
                  <div className="icon_location ">
                    <i className="fa-solid fa-calendar-days"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold">Miễn phí hủy trong 48 giờ.</h3>
                  </div>
                </div>
              </div>

              <div className="extra_info mt-5 pb-5 border-b">
                <h2>
                  <img
                    className="h-7 mb-4"
                    src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
                    alt=""
                  />
                </h2>
                <p className="text-base tracking-wider mb-2">
                  Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ
                  nhà hủy, thông tin nhà/phòng cho thuê không chính xác và những
                  vấn đề khác như sự cố trong quá trình nhận phòng.
                </p>
                <button className="btnInfo font-semibold underline text-base tracking-wider">
                  Tìm hiểu thêm
                </button>
              </div>

              <div className="translate_info mt-5 pb-5 border-b">
                <div className="flex mb-4 items-center">
                  <div className="mr-2">
                    <BsTranslate />
                  </div>
                  <div>
                    <span className="text-base tracking-wider ">
                      Một số thông tin đã được dịch tự động.
                    </span>
                    <button className="btntranslate underline font-semibold text-base tracking-wider">
                      Hiển thị ngôn ngữ gốc
                    </button>
                  </div>
                </div>

                <p className="text-base tracking-wider  mb-4">
                  Nhà nghỉ thôn dã hình lưỡi liềm trong một ngôi làng nghệ thuật
                  gốm hai nghìn năm. Một ngôi nhà nguyên khối lớn với sân thượng
                  ba tầng của Bảo tàng Văn hóa Guitar Serra, nổi tiếng với mặt
                  tiền đặc sắc trong một ngôi làng nghệ thuật gốm hai nghìn năm
                  pha trộn rất tốt với thiên nhiên.
                </p>

                <p className="text-base tracking-wider  mb-4">
                  Tận hưởng kỳ nghỉ dưỡng sức cảm xúc thư giãn trong một căn
                  phòng ấm cúng, chào...
                </p>

                <button className="btnAnimation underline font-semibold text-base tracking-wider">
                  Hiển thị thêm
                  <span className="ml-1">
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </button>
              </div>

              <div className="utilities_room">
                <div className="font-bold my-3">
                  <h2>Nơi này có những gì cho bạn</h2>
                </div>
                <div className="grid grid-cols-2">
                  <div className="utilities_room_items flex items-center pb-4">
                    <div>
                      <TbToolsKitchen2 />
                    </div>
                    <div className="ml-4 text-base tracking-wider">Bếp : </div>
                    <div className="ml-2 text-base tracking-wider">
                      {bep ? "Yes" : "No"}{" "}
                    </div>
                  </div>
                  <div className="utilities_room_items flex items-center pb-4">
                    <div>
                      <i className="fa-solid fa-wifi"></i>
                    </div>
                    <div className="ml-4 text-base tracking-wider">Wifi : </div>
                    <div className="ml-2 text-base tracking-wider">
                      {wifi ? "Yes" : "No"}{" "}
                    </div>
                  </div>
                  <div className="utilities_room_items flex items-center pb-4">
                    <div>
                      <i className="fa-solid fa-tv"></i>
                    </div>
                    <div className="ml-4 text-base tracking-wider">TV : </div>
                    <div className="ml-2 text-base tracking-wider">
                      {tivi ? "Yes" : "No"}{" "}
                    </div>
                  </div>
                  <div className="utilities_room_items flex items-center pb-4">
                    <div>
                      <TbIroning1 />
                    </div>
                    <div className="ml-4 text-base tracking-wider">
                      Bàn Ủi :{" "}
                    </div>
                    <div className="ml-2 text-base tracking-wider">
                      {banLa ? "Yes" : "No"}{" "}
                    </div>
                  </div>
                  <div className="utilities_room_items flex items-center pb-4">
                    <div>
                      <GiWashingMachine />
                    </div>
                    <div className="ml-4 text-base tracking-wider">
                      Máy Giặt :
                    </div>
                    <div className="ml-2 text-base tracking-wider">
                      {mayGiat ? "Yes" : "No"}{" "}
                    </div>
                  </div>
                  <div className="utilities_room_items flex items-center pb-4">
                    <div>
                      <TbAirConditioning />
                    </div>
                    <div className="ml-4 text-base tracking-wider">
                      Máy Lạnh :
                    </div>
                    <div className="ml-2 text-base tracking-wider">
                      {dieuHoa ? "Yes" : "No"}{" "}
                    </div>
                  </div>
                  <div className="utilities_room_items flex items-center pb-4">
                    <div>
                      <i className="fa-solid fa-person-swimming"></i>
                    </div>
                    <div className="ml-4 text-base tracking-wider">
                      Hồ bơi :{" "}
                    </div>
                    <div className="ml-2 text-base tracking-wider">
                      {hoBoi ? "Yes" : "No"}{" "}
                    </div>
                  </div>
                  <div className="utilities_room_items flex items-center pb-4">
                    <div>
                      <i className="fa-solid fa-square-parking"></i>
                    </div>
                    <div className="ml-4 text-base tracking-wider">
                      Bãi Đổ Xe :
                    </div>
                    <div className="ml-2 text-base tracking-wider">
                      {doXe ? "Yes" : "No"}{" "}
                    </div>
                  </div>
                </div>
                <div className="btn mt-5">
                  <button className="btnShow border border-solid border-gray-900  rounded-md px-5 py-3 font-semibold text-base  tracking-wider">
                    Hiển thị tất cả 75 tiện nghi
                  </button>
                </div>
              </div>
            </div>
            <div className="description_room_right w-full tablet:w-1/2 laptop:w-2/5 laptop:ml-10 mobile:mb-5 mb-5">
              <div className="sticky top-28">
                <div className="animated-button1 bg-white shadow-xl border rounded-xl p-6 w-full lg:w-5/6 mx-auto">
                  <div className="relative w-full">
                    <div className="header_card border-b pb-5 text-2xl font-semibold flex items-center justify-between">
                      <h3 className="text-lg">{tenPhong}</h3>
                    </div>
                    <p className="text-lg text-black my-3">{giaTien}$/đêm</p>
                    {/* <div className="body_card mt-5 border-b pb-5 ">
                      <p className="font-semibold text-base text-center text-black">
                        Nếu bạn thích phòng này xin hãy click vào ô ở dưới để có
                        thể đặt phòng
                      </p>
                    </div> */}
                    <div id="Calender">
                      <PickCanlender giaTien={giaTien} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user_vote mt-10 pb-5 border-b">
            <div>
              <h2 className="font-semibold  text-xl pb-4 flex items-center">
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="ml-2">4 .</div>
                <div className="ml-2">82 đánh giá của người dùng</div>
              </h2>
            </div>

            <div className="grid grid-cols-2 mobile:grid-cols-2 laptop:gap-x-20 mobile:gap-x-5 gap-y-4 laptop:text-[16px] mobile:text-[14px] text-[14px]">
              <div className="user_vote_items flex justify-between items-center ">
                <div className="w-full text-base tracking-wide mobile:text-full">
                  Mức độ sạch sẽ
                </div>
                <div className="w-1/2 flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-gray-800 h-1 rounded-full w-full"></div>
                  </div>
                  <div className="ml-4">5,0</div>
                </div>
              </div>
              <div className="user_vote_items flex justify-between items-center">
                <div className="w-full text-base tracking-wide">
                  Độ chính xác
                </div>
                <div className="w-1/2 flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-gray-800 h-1 rounded-full w-full"></div>
                  </div>
                  <div className="ml-4">5,0</div>
                </div>
              </div>
              <div className="user_vote_items flex justify-between items-center">
                <div className="w-full text-base tracking-wide">Giao Tiếp</div>
                <div className="w-1/2 flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-gray-800 h-1 rounded-full w-full"></div>
                  </div>
                  <div className="ml-4">5,0</div>
                </div>
              </div>
              <div className="user_vote_items flex justify-between items-center">
                <div className="w-full text-base tracking-wide">Vị trí</div>
                <div className="w-1/2 flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-gray-800 h-1 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                  <div className="ml-4">4,9</div>
                </div>
              </div>
              <div className="user_vote_items flex justify-between items-center">
                <div className="w-full text-base tracking-wide">Nhận Phòng</div>
                <div className="w-1/2 flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-gray-800 h-1 rounded-full w-full"></div>
                  </div>
                  <div className="ml-4">5,0</div>
                </div>
              </div>
              <div className="user_vote_items flex justify-between items-center">
                <div className="w-full text-base tracking-wide">Giá Trị</div>
                <div className="w-1/2 flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-gray-800 h-1 rounded-full w-full"></div>
                  </div>
                  <div className="ml-4">5,0</div>
                </div>
              </div>
            </div>
          </div>
          <AddComment />
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
