import React, { useEffect } from "react";
import { Button, Dropdown, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  findUserCmt,
  getAllCommentApi,
} from "../../../redux/slices/commentUser";
import { layDuLieuLocal } from "../../../util/localStorage";
import { NavLink, useParams } from "react-router-dom";
import { MaUserCmt } from "../../../_model/MaUserCmt";

const UpdateComment = (props) => {
  console.log(props.id);
  const dispatch = useDispatch();
  const { id, cm } = useParams();
  console.log(id, cm);
  const { arrComment, arrUsercmt } = useSelector((state) => state.commentUser);
  const nguoiDung = layDuLieuLocal("user")?.user?.id;
  // console.log(arrComment);
  // console.log(arrUsercmt);

  useEffect(() => {
    dispatch(getAllCommentApi());
  }, []);
  const timIdComment = () => {
    {
      arrComment.map((item) => {
        console.log(item.id);
        return <NavLink to={`detail/${props.id}/${item.id}}`} />;
      });
    }
  };
  const items = [
    {
      key: "1",
      label: <a>xóa </a>,
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://">
          chỉnh sửa
        </a>
      ),
    },
  ];
  return (
    <Space direction="vertical">
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <NavLink
          className="border-none hover:rounded-full"
          //   onClick={() => {
          //     const maUserCmt = new Comment();
          //     maUserCmt.id = nguoiDung;
          //     maUserCmt.maPhong = params.id;
          //     maUserCmt.ngayBinhLuan = "";
          //     maUserCmt.noiDung = "";
          //     maUserCmt.saoBinhLuan = 0;
          //     console.log(maUserCmt);
          //     dispatch(findUserCmt(maUserCmt));
          //   }}
          onClick={() => {
            // xoaItem(id);
            timIdComment();
          }}
        >
          ...
        </NavLink>
      </Dropdown>
    </Space>
  );
};

export default UpdateComment;
