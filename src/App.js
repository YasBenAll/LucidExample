import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { Helmet } from 'react-helmet';
import { About, AboutCourse, Course, CourseRoute, Dashboard, ForgotPassword, Home, Login, PrivateRoute, Signup, UpdateProfile } from './pages'
import { Header, Footer } from './components';
import { useAuth } from './contexts/AuthContext';
import { db } from "./firebase"; 
import { AppContext, useAppContext } from "./contexts/contextLib";
import { AnimatePresence } from "framer-motion";


function App() {
  const { currentUser } = useAuth()
  const [Paid, setPaid] = useState(false);
  const [PageCourse, setCourse] = useState(<CourseRoute path="/course" component={Course} pay={Paid}/>)
  // console.log(currentUser.uid)
  const fetchTransaction= useCallback(async()=>{
      if(currentUser){
        try{
          const response=db.collection('transactions').where('uid', '==', currentUser.uid);
          const data=await response.get();
      
          if (data.docs[0].data().status === "COMPLETED") {
            console.log("setting pay")
              setPaid(true)

          }
        }
        catch (error) {
          console.error(error);
        }
      }
  
    }, []);

  useEffect(() => {
      fetchTransaction();
    },[fetchTransaction])

  useEffect(() => {
      console.log("use state",Paid)
      
  }, [Paid]);

  var RouterCourse = () => {
    return Paid ? <h1>DEBUG: Paid</h1> : <h2>DEBUG: Not Paid</h2>
  }

  // console.log("TEST",Paid)

  return (
    <div>
        <Helmet>
          <title>Lucid Trading</title>
        </Helmet>
        {/* <Header/> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
{/* 
        {RouterCourse()} */}
        <AppContext.Provider value={Paid}>
        <Router>
          <Header/>
          <AnimatePresence exitBeforeEnter> 
          <Switch>
          <Route exact path="/" component={Home}/>
            <PrivateRoute exact path = "/dashboard" component={Dashboard} />
            <PrivateRoute exact path = "/update-profile" component={UpdateProfile} />

            <Route path="/course" render={() => {
              if(Paid) {
                return <Course />
              } else {
                return <Redirect to="/about-course" />
              }
            }} />



            <Route path="/about" exact component={About} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
           
            <Route exact path="/about-course" component={AboutCourse}/>
          </Switch>
          </AnimatePresence>
        </Router> 
        </AppContext.Provider>
        <Footer />

    </div>
  );
}

export default App;