import React from "react";
import "./navbar.css";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="logo">UNRAVEL</div>
        <ul className="list">
          <li>Home</li>
          <li>Reviews</li>
          <li>Blogs</li>
          <li>Unravel for Business</li>
        </ul>
        <div>
          <button className=" btn">Login</button>
          <button className="btn">Sign Up</button>
        </div>
      </div>

      <section className="content">
        <p className="para1">Discover your Perfect Business Nearby !</p>
        <p className="para2">Check Ratings, Read Reviews & Buy</p>
        <div className="searchbox">
          <div className="box1">
            <input
              type="text"
              className="textarea1"
              placeholder="What are you looking for"
            />
            <BsSearch className="icon" />
          </div>
          <div className="box2">
            <input
              type="text"
              className="textarea2"
              placeholder="Select category"
            />
          </div>
          <button className="btn search-btn">Search</button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
