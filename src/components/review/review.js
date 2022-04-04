import React from "react";
import "./review.css";
import img from "../../usage/ff.jpg";
import { BsFillStarFill } from "react-icons/bs";
const Review = () => {
  return (
    <div className="reviews">
      <div className="reviews-container">
        <h2>Latest Reviews</h2>
        <h4>Reviews that matters !</h4>
        <div className="reviews-main-content">
          <div className="reviews-content">
            <div className="reviews-content-head">
              <img src={img} alt="review" width="50px" height="50px" />
              <div className="stars">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <span>4.5/5.0</span>
              </div>

              <p className="shop">Shops</p>
            </div>
            <div className="reviews-content-body">
              <p>
                John Doe <span className="reviewed-content">reviewed</span>
              </p>
              <p className="reviewed-content-exp">"Great Experience"</p>
              <p className="reviewed-content-text">
                I really liked the place a lot as it covered all the things i
                wanted
              </p>
            </div>
            <div className="reviews-content-footer">
              <div className="reviews-content-footer-text">
                <p>Published : 26 February 2022</p>
              </div>
              <div>
                <button className="reviews-content-footer-btn">
                  Read Reviews
                </button>
              </div>
            </div>
          </div>
          <div className="reviews-content">
            <div className="reviews-content-head">
              <img src={img} alt="review" width="50px" height="50px" />
              <div className="stars">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <span>4.5/5.0</span>
              </div>

              <p className="shop">Shops</p>
            </div>
            <div className="reviews-content-body">
              <p>
                John Doe <span className="reviewed-content">reviewed</span>
              </p>
              <p className="reviewed-content-exp">"Great Experience"</p>
              <p className="reviewed-content-text">
                I really liked the place a lot as it covered all the things i
                wanted
              </p>
            </div>
            <div className="reviews-content-footer">
              <div className="reviews-content-footer-text">
                <p>Published : 26 February 2022</p>
              </div>
              <div>
                <button className="reviews-content-footer-btn">
                  Read Reviews
                </button>
              </div>
            </div>
          </div>
          <div className="reviews-content">
            <div className="reviews-content-head">
              <img src={img} alt="review" width="50px" height="50px" />
              <div className="stars">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <span>4.5/5.0</span>
              </div>

              <p className="shop">Shops</p>
            </div>
            <div className="reviews-content-body">
              <p>
                John Doe <span className="reviewed-content">reviewed</span>
              </p>
              <p className="reviewed-content-exp">"Great Experience"</p>
              <p className="reviewed-content-text">
                I really liked the place a lot as it covered all the things i
                wanted
              </p>
            </div>
            <div className="reviews-content-footer">
              <div className="reviews-content-footer-text">
                <p>Published : 26 February 2022</p>
              </div>
              <div>
                <button className="reviews-content-footer-btn">
                  Read Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
