import React, { useState, useEffect } from 'react';
import {Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from "../firebase"; 

export default function PrivateRoute( {component: Component, pay, ...rest}) {
    console.log("pay:",pay)
    // console.log(Paid)
    return (
        <Route 
        {...rest}
        render={props => {
            return pay ? <Component {...props} /> : 
            <Redirect to="/about-course" />
        }}
        ></Route>

        // <Route 
        //     render = {props => {return <Redirect to="/about-course" />
        // }}
        // ></Route>
    )
}
