import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  findRenderItem,
  getAllRoomAPI,
  getRoomUserBookedApi,
} from "../../redux/slices/roomSLices";
import { layDuLieuLocal } from "../../util/localStorage";

const InfoUser = () => {
  const maNguoiDung = layDuLieuLocal("user")?.user.id;
  const dispatch = useDispatch();
  const { arrayRoom, controlRoom } = useSelector((state) => state.room);
  console.log(arrayRoom);
  console.log(controlRoom);
  // console.log(maNguoiDung);
  useEffect(() => {
    dispatch(getRoomUserBookedApi(maNguoiDung));
    dispatch(getAllRoomAPI());
    dispatch(findRenderItem(controlRoom));
  }, []);
  return (
    <div style={{ margin: "100px 20px" }}>
      {
      // Array.isArray(controlRoom)        ? 
      controlRoom.map(({ maPhong, ngayDen, ngayDi }, index) => {
            <div
              className="max-w-2xl my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <div className="flex">
                <div className="w-1/3">
                  <a href="#" style={{ width: "100%" }}>
                    <img
                      className="rounded-l-lg"
                      style={{ height: "100%" }}
                      src="https://picsum.photos/300/200"
                      alt
                    />
                  </a>
                </div>
                <div className="w-2/3">
                  {" "}
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Mã Phòng : {maPhong}
                      </h5>
                    </a>
                    <div className="flex">
                      <div className="w-1/2">
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          ngày đến <span>{ngayDen}</span>
                        </p>
                      </div>
                      <div className="w-1/2">
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          ngày đi <span>{ngayDi}</span>
                        </p>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>;
          })
        // : ""
        }
    </div>
  );
};

export default InfoUser;
