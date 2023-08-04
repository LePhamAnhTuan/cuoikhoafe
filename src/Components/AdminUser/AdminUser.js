import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Input, Popconfirm, Button } from "antd";
import FormAdminUser from "../FormAdminUser/FormAdminUser";
import { adminUser, adminUsers } from "../../services/adminUser";
import { useDispatch, useSelector } from "react-redux";
import userSlices, { getAllUser } from "../../redux/slices/adminUserSlices";
import { useNavigate } from "react-router-dom";

const AdminUser = () => {
  const columns = [
    {
      title: "stt",
      dataIndex: "key",
      key: "key",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Họ Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
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
      render: (text) => <p>{text ? "NAM" : "NU"}</p>,
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
          <Popconfirm
            title={`Xác nhận xóa id:${record.id}`}
            okText="Đồng ý"
            cancelText="Hủy"
            okType
            onConfirm={() => {
              btnXoa(record.id);
            }}
          >
            <button className="text-white bg-red-500 mr-2 py-2 px-3 rounded-lg hover:bg-red-600 duration-500 ">
              Xóa
            </button>
          </Popconfirm>

          <button
            onClick={() => {
              btnSua(record);
            }}
            className="text-white bg-yellow-300 py-2 px-3 rounded-lg hover:bg-yellow-400 duration-500 "
          >
            Sửa
          </button>
        </>
      ),
    },
  ];
  const [timKiem, setTimKiem] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => {
    return state.adminUser.userValue;
  });
  const btnXoa = (data) => {
    console.log(data);
    adminUser
      .adminUserXoa(data)
      .then((res) => {
        console.log(res);
        alert(`Xóa thành công user id:${data}`);
        dispatch(getAllUser());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const btnSua = (data) => {
    console.log(data);
    navigate(`/admin/user/${data.id}`);
  };
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  let newUser = User.map((item, index) => {
    return { ...item, key: index + 1 };
  });
  const { Search } = Input;

  const onSearch = (value) => {
    let keyword = newUser.filter((item) => {
      let numberString = item.id.toString();
      let valueString = value.toString();
      if (numberString.includes(valueString)) {
        return { ...item };
      }
    });
    setTimKiem(keyword);
  };

  return (
    <div className="content_room flex justify-between">
      <div className="table_room ">
        <Search
          placeholder="tìm kiếm theo ID"
          allowClear
          bordered
          onChange={(event) => {
            onSearch(event.target.value);
          }}
          enterButton="Search"
          size="middle"
          onSearch={onSearch}
          className="w-1/2 bg-blue-400"
        />

        <Table
          columns={columns}
          dataSource={timKiem == "" ? newUser : timKiem}
        />
      </div>
      <div className="form_add_room">
        <FormAdminUser />
      </div>
    </div>
  );
};

export default AdminUser;
