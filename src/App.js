
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {authActions} from "./reducers/auth";
import Home from "./Components/Content/Home";
import Login from "./Components/Auth/Login"
import style from "./index.css";
import {BrowserRouter} from "react-router-dom";
function App() {

const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);





return (
  <BrowserRouter>
 
   
{isLoggedIn? <Home/> : <Login/>}

    
    </BrowserRouter>
  );
}

export default App;
