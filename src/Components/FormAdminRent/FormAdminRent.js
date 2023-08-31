import { DatePicker, Drawer, Space, message } from "antd";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { getAllRent, getAllUser } from "../../redux/slices/adminUserSlices";
import { adminUser } from "../../services/adminUser";
import moment from 'moment'
const FormAdminRent = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const { RangePicker } = DatePicker;
  const [ngayDen1, setNgayDen] = useState();
  const [ngayDi1, setNgayDi] = useState();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const onChange = (date, dateString) => {
   
    setNgayDen(dateString[0]);
    setNgayDi(dateString[1]);
  };

  const params = useParams();
  useEffect(() => {
    if (params.id != undefined) {
      adminUser
        .adminGetAllRentId(params.id)
        .then((res) => {
          console.log(res);
          formik.setValues(res.data.content);
        })
        .catch((err) => console.log(err));
    }
  }, [params]);
  const formik = useFormik({
    initialValues: {
      id: "",
      maPhong: "",
      ngayDen: ngayDen1,
      ngayDi: ngayDi1,
      soLuongKhach: "",
      maNguoiDung: "",
    },
    validationSchema: yup.object({
      id: yup
        .number()
        .typeError("Phải là số!!!")
        .required("Vui lòng không bỏ trống!"),
      maPhong: yup
        .number()
        .typeError("Phải là số!!!")
        .required("Vui lòng không bỏ trống!"),
      soLuongKhach: yup
        .number()
        .typeError("Phải là số!!!")
        .required("Vui lòng không bỏ trống!"),
      maNguoiDung: yup
        .number()
        .typeError("Phải là số!!!")
        .required("Vui lòng không bỏ trống!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      values.ngayDen=ngayDen1;
      values.ngayDi=ngayDi1

      const res = adminUser
        .adminPutRent(values)
        .then((res) => {
          messageApi.success("Thêm thành công!!!");
          console.log(res);
          dispatch(getAllRent());
        })
        .catch((err) => {
          messageApi.error("Đã xảy ra lỗi!!!");
          console.log(err);
        });
      formik.resetForm({
        values: {
          id: "",
          maPhong: "",
          ngayDen: "",
          ngayDi: "",
          soLuongKhach: "",
          maNguoiDung: "",
        },
      });
    },
  });
  const btnCapNhat = async () => {
    try {
      const res = await adminUser.adminUserIdPut(params.id, values);
      console.log("res: ", res);  
    } catch (error) {
      console.log(error);
    }
    formik.resetForm({
      values: {
        id: "",
        maPhong: "",
        ngayDen: "",
        ngayDi: "",
        soLuongKhach: "",
        maNguoiDung: "",
      },
    });
    navigate("/admin/rent");
    dispatch(getAllUser());
  };

  const { handleSubmit, handleChange, handleBlur, values } = formik;
  const { id, maPhong, ngayDen, ngayDi, soLuongKhach, maNguoiDung } =
    formik.errors;
  return (
    <div>
      {contextHolder}
      <button
        onClick={showDrawer}
        className="text-white bg-blue-500 ml-2 py-2 px-3 rounded-lg hover:bg-blue-600 duration-500 "
      >
        Thêm Phòng Thuê
      </button>
      <Drawer
        title="Thông Tin Phòng"
        // placement="right"
        width={600}
        contentWrapperStyle={{ left: "unset", top: "0", bottom: "0" }}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingTop: "10px" }}
        headerStyle={{ padding: "6px" }}
      >
        <h1 className="bold text-4xl mb-3">Thêm người dùng</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2">
            <div className="relative z-0 w-full h-auto mb-6 group">
              <input
                disabled={params.id ? true : false}
                value={values.id}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="id"
                id="id"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              {id && formik.touched.id ? (
                <p className="text-red-500">{id}</p>
              ) : (
                ""
              )}
              <label
                htmlFor="=id"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                ID
              </label>
            </div>
            <div className="relative z-0 w-full h-auto mb-6 group">
              <input
                disabled={params.id ? true : false}
                value={values.maNguoiDung}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="maNguoiDung"
                id="maNguoiDung"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              {maNguoiDung && formik.touched.maNguoiDung ? (
                <p className="text-red-500">{maNguoiDung}</p>
              ) : (
                ""
              )}
              <label
                htmlFor="=maNguoiDung"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mã Người Dùng
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="relative z-0 w-full h-auto mb-6 group">
              <input
                disabled={params.id ? true : false}
                value={values.soLuongKhach}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="soLuongKhach"
                id="soLuongKhach"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              {soLuongKhach && formik.touched.soLuongKhach ? (
                <p className="text-red-500">{soLuongKhach}</p>
              ) : (
                ""
              )}
              <label
                htmlFor="=soLuongKhach"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Số Khách
              </label>
            </div>
            <div className="relative z-0 w-full h-auto mb-6 group">
              <input
                disabled={params.id ? true : false}
                value={values.maPhong}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="maPhong"
                id="maPhong"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              {maPhong && formik.touched.maPhong ? (
                <p className="text-red-500">{maPhong}</p>
              ) : (
                ""
              )}
              <label
                htmlFor="=maPhong"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mã Phòng
              </label>
            </div>
          </div>
          <div className="pickdate">
            <Space direction="vertical" size={12}>
              <RangePicker 
              onChange={onChange} 
              picker="day"
              format="YYYY-MM-DDTHH:mm:ss"
                 />
            </Space>
          </div>

          <div className="btn_add_user mt-10">
            <button
              type="submit"
              className="text-white bg-green-500 duration-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-2/5 ml-2 sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Thêm
            </button>
            <button
              disabled={params.id ? false : true}
              onClick={() => {
                btnCapNhat();
              }}
              type="button"
              className={`${
                params.id ? "inline-block" : "hidden"
              } text-white bg-blue-700 duration-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-2/5 ml-2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              Cập nhật
            </button>
          </div>
        </form>
      </Drawer>
    </div>
  );
};

export default FormAdminRent;
