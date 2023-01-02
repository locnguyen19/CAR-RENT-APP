import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../CarItem/car-item.css";

const CarItem = (props) => {
  const { name, image, rentPerHour, _id } = props.item;

 console.log(_id)
  return (
    <Col lg="4" md="4" sm="6" className="mb-5 pt-2">
      <div className="car__item">
        <div className="car__img">
          <img src={image} alt="" className="w-100 h-50" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{name}</h4>
          <h6 className="rent__price text-center mt-">
            €{rentPerHour}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> Basic model
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> Automatic
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> Normal speed
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/booking/${_id}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={  `/booking/${_id}` }>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
