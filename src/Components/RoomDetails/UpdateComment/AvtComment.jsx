import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoUserApi } from "../../../redux/slices/adminUserSlices";

const AvtComment = (props) => {
  console.log(props.maNguoiBinhLuan);
  const dispatch = useDispatch();
  const { getUser } = useSelector((state) => state.adminUser);
  console.log(getUser);
  const { avatar } = getUser;
  useEffect(() => {
    dispatch(getInfoUserApi(props.maNguoiBinhLuan));
  }, []);
  return (
    <Fragment>
      {/* {getUser.map((item, index) => {
        const { avatar } = item;
        return ( */}
      <div
        // key={index}
        // className="min-w-max"
        style={{
          height: "100%",
          padding: "0",
          borderRadius: "50%",
        }}
      >
        <img
          className="img_users rounded-full"
          src={avatar ? avatar : "https://i.pravatar.cc/50"}
          alt=""
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
      </div>
      {/* );
      })} */}
    </Fragment>
  );
};

export default AvtComment;
