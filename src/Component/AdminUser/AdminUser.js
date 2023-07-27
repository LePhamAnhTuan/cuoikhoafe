import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import FormAdminUser from "../FormAdminUser/FormAdminUser";
import { adminUser } from "../../services/adminUser";
import { useDispatch, useSelector } from "react-redux";
import userSlices, { getAllUser } from "../../redux/slices/userSlices";

const AdminUser = () => {
  const columns = [
    {
      title: "stt",
      dataIndex: "key",
      key: "key",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Họ Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ngày Sinh",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Giới Tính",
      dataIndex: "gender",
      key: "gender",
      render: (text) => <a>{text ? "NAM" : "NU"}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Quyền",
      key: "role",
      dataIndex: "role",
      render: (text, record, index) => (
        <>
          <Tag color={text == "ADMIN" ? "red" : "blue"} key={index}>
            <p>{text}</p>
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record, index) => (
        <>
          <button className="text-white bg-red-500 mr-2 py-2 px-3 rounded-lg hover:bg-red-600 duration-500 ">
            Xóa
          </button>
          <button className="text-white bg-yellow-300 py-2 px-3 rounded-lg hover:bg-yellow-400 duration-500 ">
            Sửa
          </button>
        </>
      ),
    },
  ];
  const dispatch = useDispatch();
  const userValue = useSelector((state) => {
    return state.user.userValue;
  });

  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  let newUser = userValue.map((item, index) => {
    return { ...item, key: index + 1 };
  });

  return (
    <div className="content_room flex justify-center">
      <div className="table_room">
        <Table columns={columns} dataSource={newUser} />
      </div>
      <div className="form_add_room">
        <FormAdminUser />
      </div>
    </div>
  );
};

export default AdminUser;
