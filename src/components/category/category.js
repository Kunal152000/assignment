import React from "react";
import "./category.css";
import imgcat from "../../usage/ff.jpg";
import { FiMoreHorizontal } from "react-icons/fi";

const Category = () => {
  return (
    <div className="category">
      <div className="category-container">
        <h2>Browse Business by Category</h2>
        <div className="category-content">
          <div className="category-contents">
            <img src={imgcat} alt="category" width="50px" height="50px" />
            <p>Restaurants</p>
          </div>
          <div className="category-contents">
            <img src={imgcat} alt="category" width="50px" height="50px" />
            <p>Shopping</p>
          </div>
          <div className="category-contents">
            <img src={imgcat} alt="category" width="50px" height="50px" />
            <p>Night life</p>
          </div>
          <div className="category-contents">
            <img src={imgcat} alt="category" width="50px" height="50px" />
            <p>Active life</p>
          </div>
          <div className="category-contents">
            <img src={imgcat} alt="category" width="50px" height="50px" />
            <p>Beauty & spa's</p>
          </div>
          <div className="category-contents">
            <img src={imgcat} alt="category" width="50px" height="50px" />
            <p>Automotive</p>
          </div>
          <div className="category-contents">
            <img src={imgcat} alt="category" width="50px" height="50px" />
            <p>Home Services</p>
          </div>
          <div className="category-contents">
            <FiMoreHorizontal />
            <p>More Categories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
