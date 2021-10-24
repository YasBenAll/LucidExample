import React, { useRef, useState } from "react"
import { Button, Container, Row, Col, NavLink, NavItem, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { db } from "../firebase";

export default function About() {

    return (
      <motion.div exit={{ opacity: 0 }}>
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
                About Lucid Trading
              </h2>
              <p class = "text-center" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>

            </div>
            </Col>
          </Row>
        </Container>


        
        <div className="section section-tabs">
          <Container className="justify-content-center">
            <Row>
              <Col>
              <div >
                <h2 class="title text-center">
                  Our mission
                </h2>
                <p class = "text-center" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>

              </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <Container className="justify-content-center">
            <Row>
              <Col>
              <div >
                <h2 class="title text-center">
                  The team
                </h2>
                <p class = "text-center" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>

              </div>
              </Col>
            </Row>
          </Container>
        </div>

      </motion.div>
      );    
}