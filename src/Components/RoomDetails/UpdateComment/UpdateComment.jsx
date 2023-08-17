import React, { useEffect } from "react";
import { Button, Dropdown, Popconfirm, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  findRoomUser,
  getAllCommentApi,
  layDataSetComment,
} from "../../../redux/slices/commentUserSlice";
import { NavLink, useParams } from "react-router-dom";
import { commentService } from "../../../services/commentService";
import { layDuLieuLocal } from "../../../util/localStorage";
import "../RoomDetails.scss";
import { message } from "antd";

const UpdateComment = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
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
                  messageApi.success("Xóa thành công");
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
          <button className="py-2 px-6  hover:text-white rounded-sm hover:bg-red-800 duration-500">
            Delete
          </button>
        </Popconfirm>
      ),
    },
    {
      key: "2",
      label: (
        <button
        //  id="layData"
          className="py-2 px-6  hover:text-white rounded-sm hover:bg-red-800 duration-500"
          onClick={() => {
            
            dispatch(layDataSetComment(id));
          }}
        >
          Edit
        </button>
      ),
    },
  ];
  return (
    <Space direction="vertical">
      {contextHolder}
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
