import { Dropdown, Popconfirm, Space, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { layDuLieuLocal } from "../../util/localStorage";
import { NavLink } from "react-router-dom";
import { roomServ } from "../../services/roomServices";
import { getRoomUserBookedApi } from "../../redux/slices/roomSLices";

const FormUpdateBookRoom = (props) => {
  const { id, maNguoiDung } = props;
  const [messageApi, contextHolder] = message.useMessage();
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
            if (maUser.id == maNguoiDung || maUser.role == "ADMIN") {
              console.log("xóa trong nữa");
              roomServ
                .deleteRoom(id)
                .then((res) => {
                  console.log(res);
                  messageApi.success("Xóa thành công");
                  dispatch(getRoomUserBookedApi(maNguoiDung));
                  //   await dispatch(findRoomUser(params.id));
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
          <button className="py-2 px-6  hover:text-white rounded-sm hover:bg-orange-600 duration-500">
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
          className="py-2 px-6  hover:text-white rounded-sm hover:bg-orange-600 duration-500"
          onClick={() => {
            // dispatch(layDataSetComment(id));
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

export default FormUpdateBookRoom;
