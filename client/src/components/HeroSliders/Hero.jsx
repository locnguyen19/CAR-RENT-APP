import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../HeroSliders/hero-slider.css";
function Hero() {
    return (
        <div className="hero" >
            <div className="swiper hero__swiper">
                <div className="swiper-wrapper">
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}

                    >
                        <SwiperSlide>
                            <div className="slider__item slider__item-01 mt0">
                                <Container>
                                    <div className="slider__content ">
                                        <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
                                        <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

                                        <button className="btn reserve__btn mt-4">
                                            <Link to="/cars">Reserve Now</Link>
                                        </button>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slider__item slider__item-02 mt0">
                                <Container>
                                    <div className="slider__content ">
                                        <h4 className="text-light mb-3">For Rent $40 Per Day</h4>
                                        <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

                                        <button className="btn reserve__btn mt-4">
                                            <Link to="/cars">Reserve Now</Link>
                                        </button>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider__item slider__item-03 mt0">
                                <Container>
                                    <div className="slider__content ">
                                        <h4 className="text-light mb-3">For Rent $60 Per Day</h4>
                                        <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

                                        <button className="btn reserve__btn mt-4">
                                            <Link to="/cars">Reserve Now</Link>
                                        </button>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide>


      ...
    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Hero