import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  findRoomUser,
  getAllCommentApi,
  postCommentApi,
} from "../../../redux/slices/commentUserSlice";
import UpdateComment from "./UpdateComment";
import { layDuLieuLocal } from "../../../util/localStorage";
import dayjs from "dayjs";
import ".././RoomDetails.scss";
import { message } from "antd";
import { SendOutlined } from "@ant-design/icons";
const AddComment = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();
  const { getUser, userValue } = useSelector((state) => state.adminUser);
  const { arrCommentMaPhong, arrSetComment } = useSelector(
    (state) => state.commentUser
  );
  const params = useParams();
  const [comment, SetComment] = useState();
  const [content, SetContent] = useState();
  console.log("arrCommentMaPhong", arrCommentMaPhong);

  useEffect(() => {
    async function fetchData() {
      await dispatch(getAllCommentApi());
      await dispatch(findRoomUser(params.id));
    }
    fetchData();
  }, [comment]);

  const renderEdit = (id, noiDung) => {
    // console.log(id);
    console.log(noiDung);
    console.log(arrSetComment);
    let giaTri = arrSetComment.find((item) => {
      console.log(id);
      return id == item.id;
    });
    // const xetGt = (giaTri) => {
    // };
    let setValue = () => {
      document.getElementById("editValue").value = giaTri.noiDung;
    };
    // setValue = giaTri.noiDung;
    if (giaTri) {
      return (
        <div className="flex flex-row" style={{ width: "100%" }}>
          <div className="relative z-0 w-full group mx-4">
            <input
              type="text"
              id="editValue"
              // value={giaTri.noiDung}
              defaultValue={content}
              onChange={(e) => SetContent(e.target.value)}
              className="block py-0 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ...
            </label>
          </div>
          <button
            className="hover:text-red-600"
            type="button"
            onClick={() => {
              if (!layDuLieuLocal("user")) {
                return document.getElementById("SignIn").click();
              } else {
                if (document.getElementById("editValue").value) {
                  const binhLuan = new Comment();
                  binhLuan.id = value.id;
                  binhLuan.maNguoiBinhLuan = value.maNguoiBinhLuan;
                  binhLuan.maPhong = value.maPhong;
                  binhLuan.ngayBinhLuan = dayjs().format("DD/MM/YYYY");
                  binhLuan.noiDung = document.getElementById("editValue").value;
                  binhLuan.saoBinhLuan = 0;
                  dispatch(postCommentApi(binhLuan));
                  messageApi.success("update thành công");
                  SetComment(arrCommentMaPhong);
                }
              }
            }}
          >
            <SendOutlined />
          </button>
        </div>
      );
    } else {
      return <span>{noiDung}</span>;
    }
  };
  return (
    <Fragment>
      {contextHolder}
      <div className="comment_users grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-x-20 gap-y-4 sm:w-4/5 mt-5 ">
        {arrCommentMaPhong.map(
          ({ id, ngayBinhLuan, noiDung, maNguoiBinhLuan }, index) => {
            return (
              <div className="comment_users_items mb-5" key={index}>
                <div className="nameUsers_avatar flex  items-center justify-between">
                  <div className="flex">
                    {userValue.map((item, index) => {
                      if (item.id == maNguoiBinhLuan) {
                        return (
                          <Fragment key={index}>
                            <img
                              className="img_users rounded-full"
                              src={
                                item.avatar
                                  ? item.avatar
                                  : "https://i.pravatar.cc/50"
                              }
                              alt=""
                            />
                            <br />
                            <div className="ml-3 font-normal">
                              <h4>{item.name}</h4>
                              <p className="text-xs font-thin">
                                {ngayBinhLuan}
                              </p>
                            </div>
                          </Fragment>
                        );
                      }
                    })}
                  </div>
                  <div className="font-thin">
                    <UpdateComment id={id} maNguoiBinhLuan={maNguoiBinhLuan} />
                  </div>
                </div>

                <div className=" flex flex-row py-2 font-normal text-neutral-600 ">
                  <span style={{ minWidth: "max-content" }}>bình luận :</span>{" "}
                  {renderEdit(id, noiDung)}
                </div>
              </div>
            );
          }
        )}
      </div>

      <div
        className="flex justify-items-center items-center"
        style={{
          width: "50%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: "0",
            borderRadius: "50%",
          }}
        >
          <img
            src={getUser.avatar}
            alt=""
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className="relative z-0 w-full ml-3 mb-3 group">
          <input
            type="text"
            id="noiDung"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Write an answer ...
          </label>
        </div>
        <div
          style={{
            height: "100%",
            borderRadius: "50%",
          }}
        >
          <button
            id="comment"
            className=" text-black  hover:text-blue-700  p-3 "
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            }}
            onClick={() => {
              if (!layDuLieuLocal("user")) {
                return document.getElementById("SignIn").click();
              } else {
                if (document.getElementById("noiDung").value) {
                  const binhLuan = new Comment();
                  binhLuan.id = 0;
                  binhLuan.maNguoiBinhLuan = layDuLieuLocal("user").user.id;
                  binhLuan.maPhong = params.id;
                  binhLuan.ngayBinhLuan = dayjs().format("DD/MM/YYYY");
                  binhLuan.noiDung = document.getElementById("noiDung").value;
                  binhLuan.saoBinhLuan = 0;
                  dispatch(postCommentApi(binhLuan));
                  messageApi.success("thêm thành công");
                  SetComment(arrCommentMaPhong);
                }
              }
            }}
          >
            <SendOutlined />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddComment;
