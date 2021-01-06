import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.less";
import 'bootstrap/dist/css/bootstrap.css';
import '../fontawesome@5.15.1/css/all.css'


var mountNode = document.getElementById("app");
ReactDOM.render(
   <App />
   , mountNode);
