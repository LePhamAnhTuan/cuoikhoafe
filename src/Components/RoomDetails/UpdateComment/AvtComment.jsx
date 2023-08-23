import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoUserApi } from "../../../redux/slices/commentUserSlice";

const AvtComment = (props) => {
  // console.log(props.maNguoiBinhLuan);
  // const { test, setTest } = useState();
  const maNguoiBinhLuan = props.maNguoiBinhLuan;

  // console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoUserApi(props.maNguoiBinhLuan));
  }, []);

  const { arrGetAvtUser } = useSelector((state) => state.commentUser);
  // useEffect(() => {
  //   setTest(maNguoiBinhLuan ? maNguoiBinhLuan : "");
  // }, [arrGetAvtUser]);

  // console.log(arrGetAvtUser);
  const { avatar, id } = arrGetAvtUser;
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
          src={maNguoiBinhLuan == id ? avatar : "https://i.pravatar.cc/50"}
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
