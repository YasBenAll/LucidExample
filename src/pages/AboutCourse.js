import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import PaypalDialog from '../components/PaypalDialog';
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase"; 
import { doc, getDoc, collection, query, where } from "firebase/firestore";

export default function Course() {
  const [Paid, setPaid] = useState(false);
  const { currentUser} = useAuth();
  const fetchTransaction=async()=>{
    if(currentUser){
      try{
      const response=db.collection('transactions').where('uid', '==', currentUser.uid);
      const data=await response.get();

      if (data.docs[0].data().status === "COMPLETED") {
        setPaid(true);
      }
      }
      catch (error) {
        console.error(error);
      }
    }

  }

  useEffect(() => {
    fetchTransaction();
  }, [])



  var CourseButton = () => {
    if(Paid){
      return(
      <>
                        <Button 
                    color="info" 
                    type="button"
                    to="/course"
                    tag={Link}
                    disabled={true}
                    >
                    Coming soon
                  </Button>
      </>
      )
    }
    else{ 
      return(
        <PaypalDialog/>
      )
    }

  }

  // if(Paid) {
  //   CourseButton = () => {

  //   }
  // }


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
                Learn effective trading!
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
    
      <div className="section section-tabs" style={{ minHeight: "85vh" }}>
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
              
                  {CourseButton()}
                </div>
              </Col>
            </Row>
          </Container>
        </div>

      
    </>
  )
};