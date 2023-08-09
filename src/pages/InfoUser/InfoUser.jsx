import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getAllRoomAPI,
  getRoomUserBookedApi,
} from "../../redux/slices/roomSLices";
import { layDuLieuLocal } from "../../util/localStorage";
import moment from "moment";
import dayjs from "dayjs";
import FormUpdateUser from "../../Components/FormUpdateInfoUser/FormUpdateUser";
import { useFormik } from "formik";
import {
  editAvatarApi,
  getAllUser,
  getInfoUserApi,
} from "../../redux/slices/adminUserSlices";

const InfoUser = () => {
  const maNguoiDung = layDuLieuLocal("user")?.user.id;
  // console.log();
  const [data, setData] = useState();
  // console.log(state);
  const dispatch = useDispatch();
  const { arrRenderItem, controlRoom } = useSelector((state) => state.room);

  useEffect(() => {
    dispatch(getAllUser());
    dispatch(getAllRoomAPI());
    dispatch(getRoomUserBookedApi(maNguoiDung));
    dispatch(getInfoUserApi(maNguoiDung));
  }, []);
  // console.log(arrayRoom);
  // console.log("controlRoom", controlRoom);
  // console.log(maNguoiDung);
  // console.log("arrRederItem", arrRenderItem);
  // arrRenderItem.map((item) => {
  //   console.log(item.tenPhong);
  // });
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

  // -----------render avatar
  const { getUser } = useSelector((state) => state.adminUser);
  const token = layDuLieuLocal("user").token;
  return (
    <Fragment>
      <div className="border-b" style={{ margin: "100px 10px 0 10px" }}>
        <div>
          <img
            src={layDuLieuLocal("user")?.admin?.avatar}
            alt=""
            style={{ height: "100%", height: "100%" }}
          />
        </div>

        <div>
          <h2>
            Welcome to Airbnb ,Hello{" "}
            <span className="font-semibold text-red-600">
              {layDuLieuLocal("user").user.name}
            </span>
          </h2>
        </div>
        <FormUpdateUser />
      </div>
      <div className="grid gap-2  lg:grid-cols-12 md:grid-col-12">
        <div className="col-span-8 md:col-span-12  " >
          {Array.isArray(controlRoom)
            ? controlRoom.map(
                ({ maPhong, ngayDen, ngayDi, soLuongKhach }, index) => {
                  // console.log(ngayDen, ngayDi);
                  return (
                    <div key={index}>
                      <div className="max-w-4xl my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                                  </span>
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
        <div className="col-span-4 md:col-span-12 md:max-desktop:  " style={{ marginTop: "16px" }}>
          <div className="sticky top-32">
            <div className="animated-button1 bg-white shadow-xl border rounded-xl p-6 mx-auto ">
              <div className="relative w-full">
                <div className="header_card border-b  font-semibold flex items-center flex-col my-3 ">
                  <div style={{ width: "150px", height: "150px" }}>
                    {getUser.avatar ? (
                      <img
                        style={{ height: "100%", borderRadius: "60%" }}
                        src={getUser.avatar}
                        alt=""
                      />
                    ) : (
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
                        <i
                          className="fa-solid fa-user"
                          style={{ width: "50px", height: "50px" }}
                        ></i>
                      </div>
                    )}
                  </div>
                  <input
                    name="file"
                    type="file"
                    style={{ width: "200px", margin: "10px" }}
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                  />
                  <button
                    type="submit"
                    onClick={() => {
                      dispatch(editAvatarApi(token, data));
                    }}
                    className="text-center py-1 min-w-full outline-double  outline-yellow-600 hover:bg-yellow-400 hover:text-white "
                  >
                    Cập Nhập Avatar
                  </button>
                  {/* </form> */}
                </div>
                <p className="text-lg text-black my-3"></p>
                <div className="body_card mt-5 border-b pb-5 ">
                  <p className="font-semibold text-base text-center text-black">
                    Chào Mừng bạn đã đến với Airbnb, Cùng nhau khám phá các địa
                    điểm thú vị
                  </p>
                </div>
              </div>
              <div className="my-4 flex  justify-center text-center">
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
