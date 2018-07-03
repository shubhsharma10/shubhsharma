import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/jquery'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import HomePage from "./containers/HomePage";
import './style.css'

ReactDOM.render(
    <HomePage/>,
    document.getElementById('root')
);