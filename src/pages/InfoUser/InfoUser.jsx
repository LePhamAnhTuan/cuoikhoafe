import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  getAllRoomAPI,
  getDetailRoomAPI,
  getImageRoomAPI,
  getRoomUserBookedApi,
} from "../../redux/slices/roomSLices";
import { layDuLieuLocal } from "../../util/localStorage";
import moment from "moment";
import dayjs from "dayjs";
import FormUpdateUser from "../../Components/FormUpdateInfoUser/FormUpdateUser";

const InfoUser = () => {
  const maNguoiDung = layDuLieuLocal("user")?.user.id;
  // console.log();
  const dispatch = useDispatch();
  const { arrRenderItem, controlRoom, arrayRoom } = useSelector(
    (state) => state.room
  );
  // console.log(arrayRoom);
  // const {  } = useSelector((state) => state.room);
  // console.log("controlRoom", controlRoom);
  // console.log(maNguoiDung);
  // console.log("arrRederItem", arrRenderItem);
  // arrRenderItem.map((item) => {
  //   console.log(item.tenPhong);
  // });

  useEffect(() => {
    dispatch(getAllRoomAPI());
    dispatch(getRoomUserBookedApi(maNguoiDung));
  }, []);
  const getLinkImg = (maPhong) => {
    // console.log(maPhong);
    // console.log(arrRenderItem);
    let value = arrRenderItem.find((item) => {
      return maPhong == item.id;
    });
    // console.log(value);
    // check neu nhu co value thi boc phan tu img ra tra ve
    if (value) {
      return value.hinhAnh;
    }
  };
  const getNameRoom = (maPhong) => {
    let value = arrRenderItem.find((items) => {
      return maPhong == items.id;
    });
    if (value) {
      return value.tenPhong;
    }
  };
  // console.log(newArr)
  return (
    <Fragment>
      <div className="border-b" style={{ margin: "100px 10px 0 10px" }}>
        <div>
          <h2>
            Welcome to Airbnb ,Hello{" "}
            <span className="font-semibold text-red-600">
              {layDuLieuLocal("user").user.name}
            </span>{" "}
          </h2>
        </div>
        <FormUpdateUser />
      </div>
      <div className="grid gap-2  md:grid-cols-3 sm:max-xl">
        <div className="col-span-2 " style={{ margin: "0 10px 100px 10px" }}>
          {Array.isArray(controlRoom)
            ? controlRoom.map(
                ({ maPhong, ngayDen, ngayDi, soLuongKhach }, index) => {
                  // console.log(ngayDen, ngayDi);
                  return (
                    <div>
                      <div
                        className="max-w-4xl my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        key={index}
                      >
                        <div className="flex">
                          <div className="w-3/5">
                            <a href="#" style={{ width: "100%" }}>
                              {/* <img width={"500px"} height={"350px"} src={hinhAnh} alt="" /> */}
                              <img
                                className="rounded-l-lg"
                                style={{ height: "100%" }}
                                src={getLinkImg(maPhong)}
                              />
                            </a>
                          </div>
                          <div className="w-2/5">
                            {" "}
                            <div className="p-5">
                              <a href="#">
                                <h5 className="mb-2 text-xl font-semibold tracking-tight text-black dark:text-white">
                                  Mã Phòng : {maPhong}
                                </h5>
                              </a>
                              <div>
                                <h5 className="mb-3 text-gray-700 dark:text-gray-400 font-normal text-sm">
                                  <span className="font-semibold text-black">
                                    Tên Phòng
                                  </span>{" "}
                                  : {getNameRoom(maPhong)}
                                </h5>
                              </div>
                              <div className="flex">
                                <div className="w-1/2">
                                  <p className="mb-3 text-gray-700 dark:text-gray-400 font-normal text-sm">
                                    <span className="text-black  font-semibold">
                                      {" "}
                                      Ngày đến :{" "}
                                    </span>{" "}
                                    <span>
                                      {/* dayjs('2019-01-25').format('DD/MM/YYYY') */}
                                      {moment({ ngayDen }).format("DD/MM/YYYY")}
                                    </span>
                                  </p>
                                </div>
                                <div className="w-1/2">
                                  <p className="mb-3 text-gray-700 dark:text-gray-400 font-normal text-sm">
                                    <span className="text-black font-semibold">
                                      {" "}
                                      Ngày đi :
                                    </span>{" "}
                                    <span>
                                      {moment({ ngayDi }).format("DD/MM/YYYY")}
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div>
                                <h5 className="mb-3 text-gray-700 dark:text-gray-400 font-normal text-sm">
                                  <span className="font-semibold text-black">
                                    Số Lượng khách
                                  </span>{" "}
                                  : {soLuongKhach}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )
            : ""}
        </div>
        <div className="md:col-span-2 mr-4 mb-28" style={{ marginTop: "16px" }}>
          <div className="sticky top-32">
            <div className="animated-button1 bg-white shadow-xl border rounded-xl p-6 mx-auto ">
              <div className="relative w-full">
                <div className="header_card border-b  font-semibold flex items-center flex-col my-3 ">
                  <div
                    className="bg-slate-600 text-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      alignItems: "center",
                      lineHeight: "3",
                      borderRadius: "50%",
                    }}
                  >
                    {
                      <i
                        class="fa-solid fa-user"
                        style={{ width: "50px", height: "50px" }}
                      ></i>
                    }
                  </div>
                  <a className="text-sm hover:underline hover:decoration-red-700 cursor-pointer mb-4">
                    cập nhập ảnh
                  </a>
                </div>
                <p className="text-lg text-black my-3"></p>
                <div className="body_card mt-5 border-b pb-5 ">
                  <p className="font-semibold text-base text-center text-black">
                    Chào Mừng bạn đã đến với Airbnb, Cùng nhau khám phá các địa
                    điểm thú vị
                  </p>
                </div>
              </div>
              <div className="my-4 flex items-center text-center">
                <NavLink
                  to="/"
                  className="py-2 px-4 border rounded-md duration-500 mr-3 hover:text-orange-500 "
                >
                  Quay về Trang chủ
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoUser;
