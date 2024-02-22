import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../redux/actions/to-do-actions";
import { Completed, Active, Home, Recycle, LogOut } from "../assets/constants/constant";
import "../assets/css/nav-bar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="navbar">
        <Link to="/home" className="home">
          {Home}
        </Link>

        <Link
          to="/complete"
          className="home"
          state={{
            text: "Completed List",
          }}
        >
          {Completed}
        </Link>

        <Link
          to="/active"
          className="home"
          state={{
            text: "Active List",
          }}
        >
          {Active}
        </Link>

        <Link
          to="/recycle"
          className="home"
          state={{
            text: "Recycle Bin",
          }}
        >
          {Recycle}
        </Link>

        <Link to="/login"
          className="home"
          onClick={() => dispatch(setLoggedIn(false))}>
          {LogOut}
        </Link>

      </div>
    </React.Fragment >
  );
};


export default NavBar;

