import React from "react";
import "./footer.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="div1">
          <h3>Quick Links</h3>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Help</p>
          <p>My Account</p>
          <p>Create Account</p>
          <p>Contacts</p>
        </div>
        <div className="div2">
          <h3>Categories</h3>
          <p>Shops</p>
          <p>Hotels</p>
          <p>Restaurants</p>
          <p>Stationary</p>
          <p>Events</p>
          <p>View all</p>
        </div>
        <div className="div3">
          <h3>Contacts</h3>
          <p>
            <AiOutlineHome className="contact-links" />
            <div>Dummy address, 567 , New Delhi , India</div>
          </p>
          <p>
            <BsTelephone className="contact-links" /> <span>+4392875932</span>
          </p>
          <p>
            <AiOutlineMail className="contact-links" />
            <span>info@domain.com</span>
          </p>
        </div>
        <div className="div4">
          <h3>Keep intouch</h3>
          <input
            type="text"
            className="footer-textarea"
            placeholder="Your email"
          />
          <button className="btn footer-btn">Search</button>
          <p className="follow">Follow Us</p>
          <p className="follow-links">
            <AiFillFacebook />
            <BsTwitter />
            <BsPinterest />
            <FaInstagramSquare />
          </p>
        </div>
      </div>
      <div className="div5">
        <div>
          <p>Unravel for Businesss</p>
        </div>
        <div className="footer-policy">
          <div className="footer-p1">
            <p className="footer-p1-para">Terms & Conditions</p>
          </div>
          <div className="footer-p2">
            <p className="footer-p2-para">privacy</p>
          </div>
          <div className="footer-p3">
            <p className="footer-p3-para">2022</p>
          </div>
          <div className="footer-p4">
            <p className="footer-p4-para">Unravel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
