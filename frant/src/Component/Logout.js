import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  let navigate = useNavigate();
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });
  const logout = () => {
    if (!token) {
      navigate("/");
    } else {
      window.alert("Confirm To Logout ");
      localStorage.removeItem("token");
      navigate("/");
    }
  };
  return (
    <div>
      <div className="container x_top">
        <div className=" d-flex justify-content-center  ">
          <h2>Click And Logout</h2>
        </div>
        <div className=" d-flex justify-content-center">
          <a className="btn gca" href="/" onClick={logout}>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}
