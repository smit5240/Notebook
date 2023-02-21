import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
export default function Sing_in() {
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      setTimeout(() => {
        navigate("/logout");
      }, 500);
    }
  }, []);

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be at least 3 charaters")
      .required("Password is required"),
  });

  const loginclick = async (values) => {
    // console.log(values);
    await axios
      .post("http://localhost:5000/login", values, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        if (localStorage.getItem("token")) {
          window.alert("Login Successful ");
          navigate("/middle");
        }
      })
      .catch((err) => {
        window.alert("Invalid Creadientials");
        console.log("ERROR : ", err);
      });
  };

  return (
    <Formik
      initialValues={{
        name: "",
        mobile: "",
        email: "",
        password: "",
        cpassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        loginclick(values);
      }}
    >
      {(formik) => (
        <div>
          <section className="top">
            <div className="container ">
              <div>
                <div className="row pt-5 ">
                  <div className="col d-flex justify-content-center item-center ">
                    <div className="login-title ">
                      <h2>Sign In</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row  justify-content-center  pb-5">
                <div className=" col-sm-10 col-md-9 col-xl-9  ">
                  <Form>
                    <div className="mb-3">
                      <TextField label="Email" name="email" type="email" />
                    </div>
                    <div className="mb-3">
                      <TextField
                        label="Password"
                        name="password"
                        type="password"
                      />
                    </div>
                    <button className="btn btn-dark mt-3 me-3" type="submit">
                      Register
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </Formik>
  );
}
