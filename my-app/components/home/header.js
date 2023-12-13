import React from "react";

import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <div className="border-b border-gray-200 ">
      <div className=" py-6 p-6 ">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-2 ">
            <div className="header_top__icon_wrapper">
              <BsFacebook />
            </div>
            <div className="header_top__icon_wrapper">
              <BsTwitter />
            </div>
            <div className="header_top__icon_wrapper">
              <BsInstagram />
            </div>
            <div className="header_top__icon_wrapper">
              <BsLinkedin />
            </div>
          </div>

          <div className=" text-gray-500 text-[12px] ">
            <b>pourquoi docteur</b> La santé en questions
          </div>

          <div>
            <select
              className="text-gray-500 text-[12px] "
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
