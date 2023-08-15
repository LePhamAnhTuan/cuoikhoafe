import React, { useEffect } from "react";
import { Button, Dropdown, Popconfirm, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  findRoomUser,
  getAllCommentApi,
} from "../../../redux/slices/commentUserSlice";
import { NavLink, useParams } from "react-router-dom";
import { commentService } from "../../../services/commentService";
import { layDuLieuLocal } from "../../../util/localStorage";
import "../RoomDetails.scss";
const UpdateComment = (props) => {
  // console.log(props.id);
  const params = useParams();
  // console.log(params);
  const id = props.id;
  const maUserComment = props.maNguoiBinhLuan;
  const dispatch = useDispatch();
  const maUser = layDuLieuLocal("user").user;

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const items = [
    {
      key: "1",
      label: (
        <Popconfirm
          id="DeleteUser"
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => {
            console.log("xóa đây nè");
            if (maUser.id == maUserComment || maUser.role == "ADMIN") {
              commentService
                .deleteComment(id)
                .then(async (res) => {
                  console.log(res);
                  alert("xóa thành công");
                  await dispatch(getAllCommentApi());
                  await dispatch(findRoomUser(params.id));
                })
                .catch((err) => {
                  console.log(err);
                  alert("có vấn đề xảy ra");
                });
            } else {
              alert("Bạn không có quyền xóa comment này");
            }
          }}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <button className="py-2 px-5  hover:text-white rounded-sm hover:bg-red-800 duration-500">
            Delete
          </button>
        </Popconfirm>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://">
          chỉnh sửa
        </a>
      ),
    },
  ];
  return (
    <Space direction="vertical">
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <NavLink className="border-none hover:rounded-full">...</NavLink>
      </Dropdown>
    </Space>
  );
};

export default UpdateComment;
