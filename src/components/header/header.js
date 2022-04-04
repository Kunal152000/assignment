import React from "react";
import "./header.css";
import { BsHandbagFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
      <div className="head head1 ">
        <BsHandbagFill className="head-icon" />
        <div className="head-content">Shops</div>
      </div>
      <div className="head head2">
        <FaBed className="head-icon" />
        <div className="head-content">Home Stays</div>
      </div>
      <div className="head head3 ">
        <IoFastFoodSharp className="head-icon" />
        <div className="head-content">Restaurants</div>
      </div>
      <div className="head head4 ">
        <BsMusicNoteBeamed className="head-icon" />
        <div className="head-content"> Music</div>
      </div>
      <div className="head head5">
        <FiMoreHorizontal className="head-icon" />
        <div className="head-content"> More</div>
      </div>
    </div>
  );
};

export default Header;
