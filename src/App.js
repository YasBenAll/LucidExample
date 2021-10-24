import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Articles, AboutCourse, Course, Home} from './pages'
import { Header, Footer } from './components';
import { AnimatePresence } from "framer-motion";


function App() {
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
        <Router>
          <Header/>
          <AnimatePresence exitBeforeEnter> 
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/news" exact component={Articles} />
          <Route exact path="/course" component={AboutCourse}/>
          </Switch>
          </AnimatePresence>
        </Router> 
        <Footer />

    </div>
  );
}

export default App;