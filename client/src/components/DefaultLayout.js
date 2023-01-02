import React, { useRef } from "react";
// import { Menu, Dropdown, Button, Space, Row, Col } from "antd";

import { Header } from "../components/Header/Header";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../components/Header/header.css";
import Footer from "./Footer/Footer";
const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];


function DefaultLayout(props) {
  // const menu = (
  //   <Menu>
  //     <Menu.Item>
  //       <a

  //         href="/"
  //       >
  //         Home
  //       </a>
  //     </Menu.Item>
  //     <Menu.Item>
  //       <a

  //         href="/userbookings"
  //       >
  //         Bookings
  //       </a>
  //     </Menu.Item>
  //     <Menu.Item>
  //       <a

  //         href="/admin"
  //       >
  //         Admin
  //       </a>
  //     </Menu.Item>
  //     {/* <Menu.Item onClick={() => {
  //       localStorage.removeItem('user');
  //       window.location.href = '/login'
  //     }}>
  //       <li style={{ color: 'orangered' }}>Logout</li>
  //     </Menu.Item> */}
  //   </Menu>
  // );
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <div>
      {/* <div className="header bs1">
        <Row gutter={16} justify='center'>
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1 ><b><Link to='/' style={{ color: 'black' }}>24HRENT</Link></b></h1>
              <Dropdown overlay={menu} placement="bottomCenter">
            <Button>user</Button>
          </Dropdown>
            </div>
          </Col>
        </Row> 
        

      </div> 
       */}
      <header className="header">
        {/* ============ header top ============ */}
        <div className="header__top">
          <Container>
            <Row>
              <Col lg="6" md="6" sm="6">
                <div className="header__top__left">
                  <span>Need Help?</span>
                  <span className="header__top__help">
                    <i class="ri-phone-fill"></i> +358-41-222-333-555
                </span>
                </div>
              </Col>

              <Col lg="6" md="6" sm="6">
                <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                  <span >
                    <Link to="./login" className=" d-flex align-items-center gap-1 p-2 ">
                      <i class="ri-login-circle-line"></i> Login
                  </Link>
                  </span>
                  <span>
                    <Link to="#" className=" d-flex align-items-center gap-1 p-2">
                      <i class="ri-user-line"></i> Register
                  </Link>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* =============== header middle =========== */}
        <div className="header__middle">
          <Container>
            <Row>
              <Col lg="4" md="3" sm="4">
                <div className="logo">
                  <h1>
                    <Link to="/home" className=" d-flex align-items-center gap-2">
                      <i class="ri-car-line"></i>
                      <span>
                        Rent Car <br /> Service
                    </span>
                    </Link>
                  </h1>
                </div>
              </Col>

              <Col lg="3" md="3" sm="4">
                <div className="header__location d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-earth-line"></i>
                  </span>
                  <div className="header__location-content">
                    <h4>KAMPPI, TIKKURILA, ESPOKESKUS</h4>
                    <h6>UUSIMAA REGIONS, FINLAND</h6>
                  </div>
                </div>
              </Col>

              <Col lg="3" md="3" sm="4">
                <div className="header__location d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-time-line"></i>
                  </span>
                  <div className="header__location-content">
                    <h4>Sunday to Friday</h4>
                    <h6>10am - 7pm</h6>
                  </div>
                </div>
              </Col>

              <Col
                lg="2"
                md="3"
                sm="0"
                className=" d-flex align-items-center justify-content-end "
              >
                <button className="header__btn btn ">
                  <Link to="/contact">
                    <i class="ri-phone-line"></i> Request a call
                </Link>
                </button>
              </Col>
            </Row>
          </Container>
        </div>

        {/* ========== main navigation =========== */}

        <div className="main__navbar">
          <Container>
            <div className="navigation__wrapper d-flex align-items-center justify-content-between">
              <span className="mobile__menu">
                <i class="ri-menu-line" onClick={toggleMenu}></i>
              </span>

              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <div className="menu">
                  {navLinks.map((item, index) => (
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active nav__item" : "nav__item"
                      }
                      key={index}
                    >
                      {item.display}
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="nav__right">
                <div className="search__box">
                  <input type="text" placeholder="Search" />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      <div className="content">{props.children}</div>

      <Footer></Footer>
    </div>
  );
}

export default DefaultLayout;
