import React, { useState, useEffect } from 'react';
import {Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from "../firebase"; 

export default function PrivateRoute( {component: Component, ...rest}) {
    // console.log(Paid)
    return (
            <Redirect to="/about-course" />
        


        // <Route 
        //     render = {props => {return <Redirect to="/about-course" />
        // }}
        // ></Route>
    )
}
