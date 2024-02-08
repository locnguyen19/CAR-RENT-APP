import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/action/carsActions'
import { Col, Row, Divider, DatePicker, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import Hero from '../components/HeroSliders/Hero'
import BecomeDriverSection from '../components/Driver/BecomeDriverSection'
import CarItem from '../components/CarItem/CarItem'
import AboutSection from '../components/AboutSection'
// import { Container, Row, Col } from "reactstrap";

function Home() {
  const { cars } = useSelector(state => state.carsReducer)
  const [totalCars, setTotalcars] = useState([])
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllCars())
  }, [])

  useEffect(() => {

    setTotalcars(cars)

  }, [cars])


  return (
    <DefaultLayout>
      <section className="p-0 ">
        <Hero></Hero>
      </section>
      <AboutSection aboutClass="aboutPage"  ></AboutSection>

      {/* <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              
            </Row>
          </Container>
        </div>
      </section> */}
     
      <Row >


        {/* {totalCars.map(car => {
                    return <Col lg={5} sm={24} xs={24}>
                        <div className="car p-2  bs1">
                            <img src={car.image} className="carimg2" />

                            <div className="car-content d-flex align-items-center justify-content-between">

                                <div className='text-left pl-2'>
                                    <p>{car.name}</p>
                                    <p> Rent Per Hour {car.rentPerHour} /-</p>
                                </div>
                                <div>
                                    <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
                                </div>

                            </div>
                        </div>
                    </Col>
                })} */}

        {totalCars.map(car => {
          return <>
            <CarItem item={car} key={car._id}  ></CarItem>
          </>
        })}

      </Row>
      <BecomeDriverSection></BecomeDriverSection>
    </DefaultLayout>
  )
}

export default Home
