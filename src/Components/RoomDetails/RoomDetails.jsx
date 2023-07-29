import React from "react";
import { BsTranslate } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import { BiSolidDryer } from "react-icons/bi";

const RoomDetails = () => {
  return (
    <div className="detailsRoom h-28 ">
      <div className="mt-24 container mx-auto px-20 pb-20">
        <div>
          <h1 className="name_room flex items-center">
            <button className="mr-3">
              <BsTranslate />
            </button>
            <p>Tên Khách Sạn</p>
          </h1>
          <div className="sub_title flex justify-between items-center ">
            <div className="flex items-center gap-3">
              <span className="flex items-center">
                <AiFillStar className="mr-2" />4 .
              </span>
              <span className="underline ">99 đánh giá </span> .
              <span className="flex items-center">
                <FaAward className="mr-2" />
                Chủ nhà siêu cấp .
              </span>
              <span className="font-bold underline">Việt Nam</span>
            </div>
            <div>
              <button className="mr-3">
                <i className="fa-solid fa-arrow-up-from-bracket mr-2"></i>
                <span>Chia sẻ</span>
              </button>
              <button>
                <i className="fa-regular fa-heart mr-2"></i>
                <span>Lưu</span>
              </button>
            </div>
          </div>
          <div className="image_room mt-5">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="description_room mt-10 border-b pb-5 justify-between flex w-full ">
            <div className="description_room_left w-full sm:w-1/2 lg:w-3/5">
              <div className="title border-b pb-5">
                <h1 className="font-bold text-lg">
                  Toàn bộ căn hộ. Chủ nhà Sungwon
                </h1>
                <p className="text-sm font-normal tracking-widest ">
                  <span>số khách -</span>
                  <span className="mx-1">số phòng ngủ -</span>
                  <span className="mx-1">số phòng tắm</span>
                </p>
              </div>

              <div className="location_room mt-5 pb-5 border-b">
                <div className="flex w-full">
                  <div className="icon_location pt-2">
                    <i className="fa-solid fa-medal"></i>
                  </div>
                  <div className="ml-4">
                    <h3>Sungwon là Chủ nhà siêu cấp</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum, repellat.
                    </p>
                  </div>
                </div>

                <div className="flex mt-5">
                  <div className="icon_location pt-2">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="ml-4">
                    <h3>Địa điểm tuyệt vời</h3>
                    <p className="tracking-wider">
                      90% khách gần đây đã xếp hạng 5 sao cho vị trí này.
                    </p>
                  </div>
                </div>
                <div className="flex mt-5 items-center">
                  <div className="icon_location ">
                    <i className="fa-solid fa-calendar-days"></i>
                  </div>
                  <div className="ml-4">
                    <h3>Miễn phí hủy trong 48 giờ.</h3>
                  </div>
                </div>
              </div>

              <div className="extra_info mt-5 pb-5 border-b">
                <h2>
                  <img
                    className="h-7 mb-4"
                    src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
                    alt=""
                  />
                </h2>
                <p className="text-base tracking-wider mb-2">
                  Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ
                  nhà hủy, thông tin nhà/phòng cho thuê không chính xác và những
                  vấn đề khác như sự cố trong quá trình nhận phòng.
                </p>
                <button className="font-semibold underline text-base tracking-wider">
                  Tìm hiểu thêm
                </button>
              </div>

              <div className="translate_info mt-5 pb-5 border-b">
                <div className="flex mb-4 items-center">
                  <div className="mr-2">
                    <BsTranslate />
                  </div>
                  <div>
                    <span className="text-base tracking-wider ">
                      Một số thông tin đã được dịch tự động.
                    </span>
                    <button className="underline font-semibold text-base tracking-wider">
                      Hiển thị ngôn ngữ gốc
                    </button>
                  </div>
                </div>

                <p className="text-base tracking-wider  mb-4">
                  Nhà nghỉ thôn dã hình lưỡi liềm trong một ngôi làng nghệ thuật
                  gốm hai nghìn năm. Một ngôi nhà nguyên khối lớn với sân thượng
                  ba tầng của Bảo tàng Văn hóa Guitar Serra, nổi tiếng với mặt
                  tiền đặc sắc trong một ngôi làng nghệ thuật gốm hai nghìn năm
                  pha trộn rất tốt với thiên nhiên.
                </p>

                <p className="text-base tracking-wider  mb-4">
                  Tận hưởng kỳ nghỉ dưỡng sức cảm xúc thư giãn trong một căn
                  phòng ấm cúng, chào...
                </p>

                <button className="underline font-semibold text-base tracking-wider">
                  Hiển thị thêm
                  <span className="ml-1">
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </button>
              </div>

              <div className="utilities_room">
                <div>
                  <h2>Nơi này có những gì cho bạn</h2>
                </div>
                <div className="grid grid-cols-2">
                  <div className="utilities_room_items flex items-center pb-4">
                    <div>
                      <TbToolsKitchen2 />
                    </div>
                    <div className="ml-4 text-base tracking-wider">Bếp</div>
                  </div>
                  <div className="utilities_room_items flex items-center pb-4">
                    <div>
                      <i className="fa-solid fa-wifi"></i>
                    </div>
                    <div className="ml-4 text-base tracking-wider">Wifi</div>
                  </div>
                  <div className="utilities_room_items flex items-center pb-4">
                    <div>
                      <i className="fa-solid fa-tv"></i>
                    </div>
                    <div className="ml-4 text-base tracking-wider">TV</div>
                  </div>
                  <div className="utilities_room_items flex items-center pb-4">
                    <div>
                      <BiSolidDryer />
                    </div>
                    <div className="ml-4 text-base tracking-wider">
                      Máy Sấy Khô
                    </div>
                  </div>
                  <div className="utilities_room_items flex items-center pb-4">
                    <div>
                      <i className="fa-solid fa-temperature-three-quarters"></i>
                    </div>
                    <div className="ml-4 text-base tracking-wider">
                      Hệ Thống sưởi
                    </div>
                  </div>
                  <div className="utilities_room_items flex items-center pb-4">
                    <div>
                      <i className="fa-solid fa-person-swimming"></i>
                    </div>
                    <div className="ml-4 text-base tracking-wider">Hồ bơi</div>
                  </div>
                </div>
                <div className="mt-5">
                  <button className="border border-solid border-gray-900  rounded-md px-5 py-3 font-semibold text-base  tracking-wider">
                    Hiển thị tất cả 75 tiện nghi
                  </button>
                </div>
              </div>
            </div>

            <div className="description_room_right w-full sm:w-1/2 lg:w-2/5 ml-5">
              <div className="sticky top-28">
                <div className="bg-white shadow-xl border rounded-xl p-6 w-full lg:w-5/6 mx-auto">
                  <div className="relative w-full">
                    <div className="border-b pb-5  text-2xl font-semibold flex items-center justify-between">
                      <p>Tên khách sạn</p>
                      <p>Tiền phòng</p>
                    </div>
                    <div className="mt-5 border-b pb-5 ">
                      <p className="font-semibold text-base text-center">
                        Nếu bạn thích phòng này xin hãy click vào ô ở dưới để có
                        thể đặt phòng
                      </p>
                    </div>
                    <button className="w-full py-3 mt-3 rounded-lg text-orange-500 text-lg font-semibold bg-pink-400">
                      Đặt Phòng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment_user mt-10 pb-5 border-b">
            <div>
              <h2 className="font-semibold  text-xl pb-4 flex items-center">
                <div>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="ml-2">4 .</div>
                <div className="ml-2">82 đánh giá của người dùng</div>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-20 gap-y-4">
              <div className="user_vote flex justify-between items-center">
                <div className="w-full text-base tracking-wide">
                  Mức độ sạch sẽ
                </div>
                <div className="w-1/2 flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-gray-800 h-1 rounded-full w-full"></div>
                  </div>
                  <div className="ml-4">5,0</div>
                </div>
              </div>
              <div className="user_vote flex justify-between items-center">
                <div className="w-full text-base tracking-wide">
                  Độ chính xác
                </div>
                <div className="w-1/2 flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-gray-800 h-1 rounded-full w-full"></div>
                  </div>
                  <div className="ml-4">5,0</div>
                </div>
              </div>
              <div className="user_vote flex justify-between items-center">
                <div className="w-full text-base tracking-wide">Giao Tiếp</div>
                <div className="w-1/2 flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-gray-800 h-1 rounded-full w-full"></div>
                  </div>
                  <div className="ml-4">5,0</div>
                </div>
              </div>
              <div className="user_vote flex justify-between items-center">
                <div className="w-full text-base tracking-wide">Vị trí</div>
                <div className="w-1/2 flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-gray-800 h-1 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                  <div className="ml-4">4,9</div>
                </div>
              </div>
              <div className="user_vote flex justify-between items-center">
                <div className="w-full text-base tracking-wide">Nhận Phòng</div>
                <div className="w-1/2 flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-gray-800 h-1 rounded-full w-full"></div>
                  </div>
                  <div className="ml-4">5,0</div>
                </div>
              </div>
              <div className="user_vote flex justify-between items-center">
                <div className="w-full text-base tracking-wide">Giá Trị</div>
                <div className="w-1/2 flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-gray-800 h-1 rounded-full w-full"></div>
                  </div>
                  <div className="ml-4">5,0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
