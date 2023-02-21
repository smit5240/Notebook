import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function MiddleUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const handalchange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const alluserclick = (e) => {
    e.preventDefault();
    const { password1, password2, password3 } = user;
    if (!password1 || !password2 || !password3) {
      window.alert("Fill All The Property");
    } else {
      if (password1 === 123 && password2 === 1234 && password3 === 12345) {
        localStorage.setItem("pass", password3);
        navigate("/alluser");
      } else {
        window.alert("Wrong Password");
      }
    }
  };

  return (
    <div>
      <section className="top">
        <div className="container ">
          <div>
            <div className="row pt-5 bg-white mb-5 ">
              <div className="col d-flex justify-content-center item-center ">
                <div className="login-title ">
                  <h2>Fill All Correct Password</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row  justify-content-center  pb-5 bg-white">
            <div className=" col-sm-10 col-md-9 col-xl-9  ">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleinputpassword" className="form-label">
                    Password 1
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password1"
                    value={user.password1}
                    onChange={handalchange}
                    id="password1"
                    width={"100px"}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    password 2
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password2"
                    value={user.password2}
                    onChange={handalchange}
                    id="password2"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    password 3
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password3"
                    value={user.password3}
                    onChange={handalchange}
                    id="password3"
                    aria-describedby="emailHelp"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mb-3"
                  onClick={alluserclick}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
