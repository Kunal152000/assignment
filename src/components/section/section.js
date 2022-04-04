import React from "react";
import "./section.css";
import { BsArrowRightShort } from "react-icons/bs";
import img1 from "../../usage/clothes.jpg";
import img2 from "../../usage/coffee.jpg";
import img3 from "../../usage/food.jpg";
import img4 from "../../usage/ff.jpg";
const Section = () => {
  return (
    <div className="section">
      <div className="section-content">
        <h2>Find The Best Business In Town</h2>
        <span className="sm-icon">
          View all <BsArrowRightShort />
        </span>
        <h4>Famous Shops </h4>
        <div className="images">
          <div className="image img1">
            <img src={img1} alt="clothes" width="240px" height="150px" />
            <p className="section-para">Clothing Store ADC</p>
          </div>
          <div className=" image img2">
            <img src={img2} alt="coffee" width="240px" height="150px" />
            <p className="section-para">Clothing Store ADC</p>
          </div>
          <div className="image img3">
            <img src={img3} alt="food" width="240px" height="150px" />
            <p className="section-para">Clothing Store ADC</p>
          </div>
          <div className="image img4">
            <img src={img4} alt="clothes" width="240px" height="150px" />
            <p className="section-para">Clothing Store ADC</p>
          </div>
          <div className="image img5">
            <img src={img3} alt="clothes" width="240px" height="150px" />
            <p className="section-para">Clothing Store ADC</p>
          </div>
          <div className="image img6">
            <img src={img2} alt="clothes" width="240px" height="150px" />
            <p className="section-para">Clothing Store ADC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
