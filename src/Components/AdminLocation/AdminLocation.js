import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Input, Popconfirm, Button } from "antd";
import FormAdminUser from "../FormAdminUser/FormAdminUser";
import { adminUser, adminUsers } from "../../services/adminUser";
import { useDispatch, useSelector } from "react-redux";
import userSlices, {
  getAllLocation,
  getAllUser,
} from "../../redux/slices/adminUserSlices";
import { useNavigate } from "react-router-dom";
import FormAdminLocation from "../FormAdminLocation/FormAdminLocation";
const AdminLocation = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Tên Vị Trí",
      dataIndex: "tenViTri",
      key: "tenViTri",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Tỉnh Thành",
      dataIndex: "tinhThanh",
      key: "tinhThanh",
    },
    {
      title: "Quốc Gia",
      dataIndex: "quocGia",
      key: "quocGia",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text) => (
        <div>
          <img src={text} width={"200px"} alt="" />
        </div>
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
    return state.adminUser.vitri;
  });
  const btnXoa = (data) => {
    console.log(data);
    adminUser
      .deleteLocationId(data)
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
    navigate(`/admin/location/${data.id}`);
  };
  useEffect(() => {
    dispatch(getAllLocation());
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
      <div className="table_room">
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
          className="w-1/2 bg-blue-400 my-3"
        />

        <Table
          columns={columns}
          dataSource={timKiem == "" ? newUser : timKiem}
        />
      </div>
      <div className="form_add_room p-3">
        <FormAdminLocation />
      </div>
    </div>
  );
};

export default AdminLocation;
