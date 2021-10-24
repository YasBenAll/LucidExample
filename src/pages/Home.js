import React from "react";
import { Button, Container, Row, Col, NavLink, NavItem, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";

export default function About() {
    return (
      <>
        <br />
        <br />
        <Container className="justify-content-center">
          <Row>
              <Col>
              <div id="images" class="text-center"> 
                  <img 
                    alt="Lucid trading logo"
                    width = "200px"
                    margin-top = "400px"
                    className="rounded-circle"
                    src={require("assets/img/logo.jpg").default}
                  ></img>
              </div>
              </Col>
          </Row>
          <Row>
            <Col>
            <div >
              <h2 class="title text-center">
                Learn effective trading
              </h2>
              <p class = "text-center" >
              Welcome To Lucid Trading, where people learn how to trade like a professional. 
              Trading and investing is not easy and here at Lucid Trading we know what works best. Our goal is to educate people on how to trade and invest optimally and rationally. 
              We want to equip people with the highest quality of knowledge on stocks and the stock market. Sign up today for one of our courses on trading and investing.
              </p>
            </div>
            </Col>
          </Row>
        </Container>

        <Container className="text-center" style={{ minHeight: "10vh" }}>
          <Row >
            <Col xs = "3">
            </Col>
            <Col xs = "1">
              <NavLink
                href="https://twitter.com/TradingLucid"
                target="_blank"
                id="twitter-tooltip"
              >
                <i className="fab fa-twitter"></i>
              </NavLink>
            </Col> 
            <Col xs = "1"> 
              <NavLink
                href="https://www.instagram.com/lucid_trading_real/"
                target="_blank"
                id="instagram-tooltip"
              >
                <i className="fab fa-instagram"></i>
              </NavLink>
            </Col>
            <Col xs = "1">
              <NavLink
                href="https://www.youtube.com/c/LucidTrading"
                target="_blank"
                id="youtube-tooltip"
              >
                <i className="fab fa-youtube"></i>
              </NavLink>
            </Col>
            <Col xs = "1">
              <NavLink
                href="https://www.patreon.com/LucidTrading"
                target="_blank"
                id="patreon-tooltip"
              >
                <i className="fab fa-patreon"></i>
              </NavLink>
            </Col>
            <Col xs = "1">
              <NavLink
                href="https://discord.com/invite/2FKD5SwW8q"
                target="_blank"
                id="discord-tooltip"
              >
                <i className="fab fa-discord"></i>
              </NavLink>
            </Col>
            <Col xs = "1">
              <NavLink
                href="https://shop.spreadshirt.com/lucid-trading/"
                target="_blank"
                id="discord-tooltip"
              >
                <i className="fab fa-discord"></i>
              </NavLink>
            </Col>
          </Row>
        </Container>
        
        <div className="section section-tabs">
          <Container className="justify-content-center"
          style={{ minHeight: "20vh" }}>
            <Row>
              <Col>
                <div id="images" class="text-center"> 
                    <img 
                      alt="Lucid trading logo"
                      width = "200px"
                      margin-top = "400px"
                      className="square"
                      src={require("assets/img/logo.jpg").default}
                    ></img>
                </div>
              </Col>

              <Col>
                <div >
                  <h2 class="title">
                  Effective Investing
                  </h2>
                  <p >
                  The basics of investing
                  </p>
              
                  <Button 
                    color="info" 
                    type="button"
                    target="_top"
                    to="/about-course"
                    tag={Link}
                    >
                    View Course
                  </Button>
                  <p>$300</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
      );    
}
