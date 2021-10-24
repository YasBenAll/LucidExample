import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from "react-router-dom";

import "../src/assets/css/bootstrap.min.css";
import "../src/assets/scss/now-ui-kit.scss?v=1.5.0";
import "../src/assets/demo/demo.css?v=1.5.0";
import "../src/assets/demo/nucleo-icons-page-styles.css?v=1.5.0";


ReactDOM.render(
    <Router>
        <App />
    </Router>,
  document.getElementById('root')
);

