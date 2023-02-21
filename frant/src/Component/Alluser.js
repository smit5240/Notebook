import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Alluser() {
  let navigate = useNavigate();
  const [user, setUser] = useState([]);
  // const [updateuser, setUpdateuser] = useState({});
  // const handlechange = (e) => {
  //   console.log(e.target.name);
  //   setUpdateuser({ ...updateuser, [e.target.name]: e.target.value });
  // };

  useEffect(() => {
    let pass = localStorage.getItem("pass");
    if (!pass) {
      navigate("/verify");
    }
    try {
      axios.get("http://localhost:5000/alluser").then((e) => {
        setUser(e.data.all);
        localStorage.removeItem("pass");
      });
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  }, []);
  const deleteuser = (_id) => {
    try {
      window.alert("Are You Sure Delete User");
      axios.delete(`http://localhost:5000/deleteuser/${_id}`).then((res) => {
        window.alert(res.data.message);
      });
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  };
  // const EditeUser = (_id) => {
  //   onsubmit(_id);
  // };
  // const onsubmit = async (_id) => {
  //   console.log(_id);
  //   try {
  //     console.log(updateuser);
  //     await axios
  //       .put(`http://localhost:5000/update/${_id}`, updateuser)
  //       .then((res) => {
  //         window.alert(res.data.message);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //     window.alert(error);
  //   }
  // };
  return (
    <div>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <h2> Alluser In Table</h2>
      </div>
      <div className="container d-flex justify-content-center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">E-mail</th>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.map((user, Index) => {
                return (
                  <tr key={user._id}>
                    <th scope="row">{Index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.mobile}</td>
                    <td>{user.email}</td>
                    <td>
                      <i
                        className="fa-regular fa-trash-can"
                        onClick={() => {
                          deleteuser(user._id);
                        }}
                      ></i>
                    </td>
                    {/* <td>
                      <i
                        className="fa-regular fa-pen-to-square"
                        onClick={() => {
                          EditeUser(user._id);
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      ></i>
                    </td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/* <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Update User
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body ">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="User Name"
                  />
                  <label htmlFor="floatingPassword">User Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="name"
                    value={updateuser.name}
                    onChange={handlechange}
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="number"
                    name="email"
                    value={updateuser.email}
                    onChange={handlechange}
                    className="form-control"
                    id="floatingnumber"
                    placeholder="Mobile No."
                  />
                  <label htmlFor="floatingPassword">Mobile</label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  name="mobile"
                  value={updateuser.mobile}
                  onChange={handlechange}
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={onsubmit}
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
