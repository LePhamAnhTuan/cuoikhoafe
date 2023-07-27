import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const FormAdminLogin = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: yup.object({
      userName: yup
        .string()
        .required("Vui lòng không để trống")
        .min(3, "Vui lòng nhập trên 3 ký tự"),
      password: yup
        .string()
        .required("Vui lòng không để trống")
        .min(3, "Vui lòng nhập trên 3 ký tự"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { handleSubmit, handleChange, handleBlur } = formik;
  const { userName, password } = formik.errors;
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="userName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Tài khoản
        </label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          id="userName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {userName && formik.touched.userName ? (
          <p className="text-red-500">{userName}</p>
        ) : (
          ""
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Mật Khẩu
        </label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {password && formik.touched.password ? (
          <p className="text-red-500">{password}</p>
        ) : (
          ""
        )}
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default FormAdminLogin;
