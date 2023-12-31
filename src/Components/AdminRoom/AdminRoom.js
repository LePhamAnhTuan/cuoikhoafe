import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Popconfirm, Input } from "antd";
import FormAddRoom from "../FormAddRoom/FormAddRoom";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoomAPI } from "../../redux/slices/roomSLices";
import { getAllLocation } from "../../redux/slices/adminUserSlices";
import { adminUser } from "../../services/adminUser";
import { useNavigate } from "react-router-dom";

const AdminRoom = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text, record) => {
        return <p>{text}</p>;
      },
    },
    {
      title: "Tên phòng",
      dataIndex: "tenPhong",
      key: "tenPhong",
      render: (text, record, index) => {
        return (
          <div>
            {!record.tenViTri ? (
              <>
                <p>{text}</p>
                <img src={record.hinhAnh} width={"320px"} alt="" />
              </>
            ) : (
              <></>
            )}
          </div>
        );
      },
    },
    {
      title: "Giá Tiền",
      dataIndex: "giaTien",
      key: "giaTien",
      render: (text, record, index) => {
        return <div>{!record.tenViTri ? <p>{text}$/Đêm</p> : <></>}</div>;
      },
    },
    {
      title: "Mô Tả",

      render: (text, record, index) => {
        return (
          <div className="w-60">
            <p className=" line-clamp-2 w-full whitespace-pre-line hover:block ">
              {record.moTa}
            </p>
          </div>
        );
      },
    },
    {
      title: "Chi tiết",
      render: (text, record, index) => {
        return (
          <>
            {" "}
            {!record.tenViTri ? (
              <div>
                <p>
                  Vị trí :
                  {vitri.map((item) => {
                    if (item.id == record.id) {
                      return `${item.tenViTri},${item.tinhThanh},${item.quocGia}`;
                    }
                  })}
                </p>
                <p>Số Khách : {record.khach}</p>
                <p>
                  Phòng ngủ : {record.phongNgu} | Giường: {record.giuong}
                </p>
                <p>
                  Phòng tắm : {record.phongTam} | Máy Giặt:
                  {record.mayGiat ? (
                    <Tag color="green">
                      <p>Có</p>
                    </Tag>
                  ) : (
                    <Tag color="red">
                      <p>Không có</p>
                    </Tag>
                  )}
                </p>
                <p>
                  Bàn Là :{" "}
                  {record.banLa ? (
                    <Tag color="green">
                      <p>Có</p>
                    </Tag>
                  ) : (
                    <Tag color="red">
                      <p>Không có</p>
                    </Tag>
                  )}{" "}
                  | TiVi:
                  {record.tivi ? (
                    <Tag color="green">
                      <p>Có</p>
                    </Tag>
                  ) : (
                    <Tag color="red">
                      <p>Không có</p>
                    </Tag>
                  )}
                </p>
                <p>
                  Điều Hòa :{" "}
                  {record.dieuHoa ? (
                    <Tag color="green">
                      <p>Có</p>
                    </Tag>
                  ) : (
                    <Tag color="red">
                      <p>Không có</p>
                    </Tag>
                  )}{" "}
                  | Wifi:
                  {record.wifi ? (
                    <Tag color="green">
                      <p>Có</p>
                    </Tag>
                  ) : (
                    <Tag color="red">
                      <p>Không có</p>
                    </Tag>
                  )}
                </p>
                <p>
                  Bếp :{" "}
                  {record.bep ? (
                    <Tag color="green">
                      <p>Có</p>
                    </Tag>
                  ) : (
                    <Tag color="red">
                      <p>Không có</p>
                    </Tag>
                  )}{" "}
                  | Đỗ Xe:
                  {record.doXe ? (
                    <Tag color="green">
                      <p>Có</p>
                    </Tag>
                  ) : (
                    <Tag color="red">
                      <p>Không có</p>
                    </Tag>
                  )}
                </p>
                <p>
                  Hồ Bơi :{" "}
                  {record.hoBoi ? (
                    <Tag color="green">
                      <p>Có</p>
                    </Tag>
                  ) : (
                    <Tag color="red">
                      <p>Không có</p>
                    </Tag>
                  )}{" "}
                  | Bàn Ủi:
                  {record.banUi ? (
                    <Tag color="green">
                      <p>Có</p>
                    </Tag>
                  ) : (
                    <Tag color="red">
                      <p>Không có</p>
                    </Tag>
                  )}
                </p>
              </div>
            ) : (
              <></>
            )}
          </>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record, index) => (
        <>
          {!record.tenViTri ? (
            <div>
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
                  // console.log(record)
                  btnSua(record);
                }}
                className="text-white bg-yellow-300 py-2 px-3 rounded-lg hover:bg-yellow-400 duration-500 "
              >
                Sửa
              </button>
            </div>
          ) : (
            <></>
          )}
        </>
      ),
    },
  ];
  const navigate = useNavigate();

  const vitri = useSelector((state) => {
    return state.adminUser.vitri;
  });
  const btnXoa = (data) => {
    // console.log(data);
    adminUser
      .deleteRoomId(data)
      .then((res) => {
        alert(`Xóa thành công room id:${data}`);
        dispatch(getAllRoomAPI());
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const btnSua = (data) => {
    // console.log(data);
    navigate(`/admin/room/${data.id}`);
  };

  const dispatch = useDispatch();
  const arrRoom = useSelector((state) => {
    return state.room.arrayRoom;
  });
  const { Search } = Input;
  const [timKiem, setTimKiem] = useState("");
  useEffect(() => {
    dispatch(getAllLocation());
    dispatch(getAllRoomAPI());
  }, []);
  let newUser = arrRoom.map((item, index) => {
    return { ...item, key: index + 1 };
  });
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
    <div className="content_room">
      <div className="table_room">
        <div className="flex justify-between items-center">
          <FormAddRoom />
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
        </div>

        <Table
          columns={columns}
          dataSource={timKiem == "" ? newUser : timKiem}
        />
      </div>
    </div>
  );
};

export default AdminRoom;
