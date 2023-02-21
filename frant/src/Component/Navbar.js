import React, { useEffect, useState } from "react";
// import logo from "../../public/00.png"
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();
  const [isLogin, setisLogin] = useState(false);
  useEffect(() => {
    // console.log(location.pathname);
    if (localStorage.getItem("token")) {
      setisLogin(true);
    } else {
      setisLogin(false);
    }
  }, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark  bc wd">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="logo.png" height="50px" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <div>
              {/* <Link to="/" className="space">
                <img src="logo.png" height="50px" alt="" />
              </Link> */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/" ? "active" : ""
                    }  `}
                    to="/"
                  >
                    WelCome
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/sing_up" ? "active" : ""
                    }  `}
                    to="/sign_up"
                  >
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  {!isLogin && (
                    <Link
                      className={`nav-link ${
                        location.pathnamec === "/login" ? "active" : ""
                      }`}
                      to="/login"
                    >
                      Login
                    </Link>
                  )}
                </li>
                <li className="nav-item ">
                  {isLogin && (
                    <Link
                      className={`nav-link ${
                        location.pathname === "/logout" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/logout"
                    >
                      Logout
                    </Link>
                  )}
                </li>
                <li className="nav-item ">
                  {isLogin && (
                    <Link
                      className={`nav-link ${
                        location.pathname === "/middle" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/middle"
                    >
                      Notes
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/verify" ? "active" : ""
                    }  `}
                    to="/verify"
                  >
                    ALLUSERS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
