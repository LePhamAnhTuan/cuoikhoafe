import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { userService } from "../../services/userService";
import { message } from "antd";
import { luuXuongLocal } from "../../util/localStorage";
import { useDispatch } from "react-redux";
import { setDataName } from "../../redux/slice/userSlice";
const FormSignIn = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      userService
        .signin(values)
        .then((res) => {
          console.log(res);
          luuXuongLocal("user", res.data.content);
          messageApi.success("Đăng nhập thành công");
          dispatch(setDataName(res.data.content));
        })
        .catch((err) => {
          console.log(err);
          messageApi.error(err.response.data.content);
        });
    },
    // validationSchema: yup.object({
    //   account: yup.string().required("please input account"),
    //   password: yup
    //     .string()
    //     .required("please input password")
    //     // .min(3, "please input more than 3 letter"),
    // }),
  });

  const { handleSubmit, handleChange, handleBlur } = formik;
  const { email, password } = formik.errors;
  return (
    <div>
      {contextHolder}
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-10 group ">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            status={email && formik.touched.email ? "error" : ""}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          {email && formik.touched.account ? (
            <p className="text-red-600">{email}</p>
          ) : (
            ""
          )}
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your email
          </label>
        </div>
        <div className="relative z-0 w-full mb-14 group">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            status={password && formik.touched.password ? "error" : ""}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          {password && formik.touched.password ? (
            <p className="text-red-600">{password}</p>
          ) : (
            ""
          )}
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <button
          type="submit"
          className="text-black border border-neutral-950 hover:bg-black hover:text-white focus:outline-none focus:text-white: font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:focus:ring-white mb-8"
        >
          Sign In
        </button>

        <span className="text-black">
          Not a member?{" "}
          {/* <NavLink to="/signup" className={{ hover: "text-stone-700" }}>
            SIGN UP
          </NavLink> */}
        </span>
      </form>
    </div>
  );
};

export default FormSignIn;