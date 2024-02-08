import { Divider, DatePicker, Checkbox, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { getAllCars } from "../redux/action/carsActions";
import moment from "moment";
import { bookCar } from "../redux/action/bookingActions";
import AOS from 'aos';
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";
// import 'aos/dist/aos.css'; // You can also use <link> for styles
const { RangePicker } = DatePicker;
function BookingCar({ match }) {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [driver, setdriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const moment = require('moment');
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user)
  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id == carid));
    }
  }, [cars]);



  function selectTimeSlots(values) {

    console.log((values[0]).format("DD MM YYYY HH:mm"))
    console.log((values[1]).format("DD MM YYYY HH:mm"))

    setFrom((values[0]).format(" DD MM YYYY HH:mm"));
    setTo((values[1]).format(" DD MM YYYY HH:mm"));

    setTotalHours(values[1].diff(values[0], "hours"));

  }

  console.log(totalHours)
  useEffect(() => {
    setTotalAmount(totalHours * car.rentPerHour);
    // if an user require to hire a driver, there will be an extra fee which is 30 euro per time
    if (driver) {
      setTotalAmount(totalAmount + 30 * totalHours);
    }
  }, [driver, totalHours]);


  console.log(useParams())
  const { carid } = useParams()


  function bookNow() {
    const reqObj = {
      user: user._id,
      car: car._id,
      totalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      },
    };
    console.log(reqObj)
    dispatch(bookCar(reqObj));
  }
  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row className='p-3'
      // justify="center"
      // className="d-flex align-items-center"
      // style={{ minHeight: "90vh" }}
      >
        {/* <Col lg={10} sm={24} xs={24} className='p-3'>
          <img src={car.image} className="carimg2 bs1 w-100 " data-aos='flip-left' data-aos-duration='1500' />
        </Col> */}
        <Col lg="6">
          <img src={car.image} alt="" className="w-100" />
        </Col>

        {/* <Col lg={10} sm={24} xs={24} className="text-right">
          <Divider type="horizontal" dashed>
            Car Info
          </Divider>
          <div style={{ textAlign: "right" }}>
            <p>{car.name}</p>
            <p>{car.rentPerHour} Rent Per hour /-</p>
            <p>Fuel Type : {car.fuelType}</p>
            <p>Max Persons : {car.capacity}</p>
          </div>

          <Divider type="horizontal" dashed>
            Select Time Slots
          </Divider>
          <RangePicker

            showTime={{ format: " HH:mm" }}
            format="DD MM YYYY HH:mm"
            onChange={selectTimeSlots}
          />
          <br />
          <button
            className="btn1 mt-2"
            onClick={() => {
              setShowModal(true);
            }}
          >
            See Booked Slots
          </button>
          {from && to && (
            <div  >
              <p>
                Total Hours : <b>{totalHours}</b>
              </p>
              <p>
                Rent Per Hour : <b>{car.rentPerHour}</b>
              </p>
              <Checkbox
                onChange={(e) => {
                  if (e.target.checked) {
                    setdriver(true);
                  } else {
                    setdriver(false);
                  }
                }}
              >
                Driver Required
              </Checkbox>

              <h3>Total Amount : {totalAmount}</h3>

              <button className="btn1" onClick={bookNow}>
                Book Now
              </button>

            </div>
          )}
        </Col> */}
        <Col lg="6">
          <div className="car__info">
            <h2 className="section__title">{car.name}</h2>

            <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
              <h6 className="rent__price fw-bold fs-4">
                ${car.rentPerHour}.00 / Day
              </h6>

              <span className=" d-flex align-items-center gap-2">
                <span style={{ color: "#f9a826" }}>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                </span>
                    high ratings
                </span>
            </div>

            <p className="section__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa.
            </p>

            <div
              className=" d-flex align-items-center mt-3"
              style={{ columnGap: "4rem" }}
            >
              <span className=" d-flex align-items-center gap-1 section__description">
                <i
                  class="ri-roadster-line"
                  style={{ color: "#f9a826" }}
                ></i>{" "}
                Latest model
              </span>


              <span className=" d-flex align-items-center gap-1 section__description">
                <i
                  class="ri-settings-2-line"
                  style={{ color: "#f9a826" }}
                ></i>{" "}
                high automatic
              </span>



              <span className=" d-flex align-items-center gap-1 section__description">
                <i
                  class="ri-timer-flash-line"
                  style={{ color: "#f9a826" }}
                ></i>{" "}
                normal and high speed
              </span>
            </div>

            <div
              className=" d-flex align-items-center mt-3"
              style={{ columnGap: "2.8rem" }}
            >
              <span className=" d-flex align-items-center gap-1 section__description">
                <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                modern GPS
              </span>

              <span className=" d-flex align-items-center gap-1 section__description">
                <i
                  class="ri-wheelchair-line"
                  style={{ color: "#f9a826" }}
                ></i>{" "}
                {car.capacity}
              </span>

              <span className=" d-flex align-items-center gap-1 section__description">
                <i
                  class="ri-building-2-line"
                  style={{ color: "#f9a826" }}
                ></i>{" "}
                European or USA Brands
              </span>
            </div>
            
          </div>  
          <div className = 'p-5'>
          <Divider type="horizontal" dashed>
            Select Time Slots
          </Divider>
          <RangePicker

            showTime={{ format: " HH:mm" }}
            format="DD MM YYYY HH:mm"
            onChange={selectTimeSlots}
          />
          <br />
          <button
            className="btn1 mt-2"
            onClick={() => {
              setShowModal(true);
            }}
          >
            See Booked Slots
          </button>
          {from && to && (
            <div  >
              <p>
                Total Hours : <b>{totalHours}</b>
              </p>
              <p>
                Rent Per Hour : <b>{car.rentPerHour}</b>
              </p>
              <Checkbox
                onChange={(e) => {
                  if (e.target.checked) {
                    setdriver(true);
                  } else {
                    setdriver(false);
                  }
                }}
              >
                Driver Required
              </Checkbox>

              <h3>Total Amount : {totalAmount}</h3>

              <button className="btn1" onClick={bookNow}>
                Book Now
              </button>

            </div>
          )}       
          </div>

        </Col>
        {car.name && (
          <Modal
            visible={showModal}
            closable={false}
            footer={false}
            title="Booked time slots"
          >
            <div className="p-2">
              {car.bookedTimeSlots.map((slot) => {
                return (
                  <button className="btn1 mt-2">
                    {slot.from} - {slot.to}
                  </button>
                );
              })}

              <div className="text-right mt-5">
                <button
                  className="btn1"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </Modal>
        )}    

      </Row>
    </DefaultLayout>
  );
}

export default BookingCar;
