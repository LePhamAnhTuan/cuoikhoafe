import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendOutlined } from "@ant-design/icons";
import { layDuLieuLocal } from "../../../util/localStorage";
import dayjs from "dayjs";
import {
  editCommentApi,
  findRoomUser,
  getAllCommentApi,
} from "../../../redux/slices/commentUserSlice";
import { message } from "antd";

const EditRenderComment = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  // const params = useParams();
  const { id, noiDung } = props;
  const { arrSetComment, arrCommentMaPhong } = useSelector(
    (state) => state.commentUser
  );
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  // const [test, setTest] = useState("");

  let giaTri = arrSetComment.find((item) => {
    return id == item.id;
  });
  useEffect(() => {
    setContent(giaTri ? giaTri : "");
  }, [arrSetComment]);
  // useEffect(() => {
  //   async function fetchData() {
  //     await dispatch(getAllCommentApi());
  //     await dispatch(findRoomUser(props.id));
  //   }
  //   fetchData();
  // }, [comment]);
  if (giaTri) {
    // console.log(giaTri);
    // console.log(content);
    // setTest(arrSetComment);
    return (
      <div className="flex flex-row" style={{ width: "100%" }}>
        {contextHolder}
        <div className="relative z-0 w-full group mx-4">
          <input
            type="text"
            id="editValue"
            value={content.noiDung}
            onChange={(event) => setContent(event.target.value)}
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
                const id = giaTri.id;
                const comment = new Comment();
                comment.id = id;
                comment.maNguoiBinhLuan = giaTri.maNguoiBinhLuan;
                comment.maPhong = giaTri.maPhong;
                comment.ngayBinhLuan = dayjs().format("DD/MM/YYYY");
                comment.noiDung = document.getElementById("editValue").value;
                comment.saoBinhLuan = 0;
                console.log(comment.id);
                console.log("comment", comment);
                dispatch(editCommentApi(comment.id, comment));
                messageApi.success("update thành công");
                // setComment(arrCommentMaPhong);
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

export default EditRenderComment;
