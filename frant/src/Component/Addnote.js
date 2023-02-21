import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Addnote() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  });
  const Shownote = () => {
    navigate("/Shownote");
  };
  const navigate = useNavigate();
  const [user, setUser] = useState({ title: "", description: "" });
  const handlechange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const TOKEN = localStorage.getItem("token");
  const submitclick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/addnote", user, {
        headers: { "Content-Type": "application/json", token: TOKEN },
      })
      .then((res) => {
        window.alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        window.alert(err);
      });
  };

  return (
    <div>
      <div className="container top-p">
        <div className="row pt-4">
          <div className="col d-flex justify-content-center item-center">
            <div className="note_title">
              <h2>Add Note</h2>
            </div>
          </div>
        </div>
        <form>
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="mb-4">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={user.title}
                  onChange={handlechange}
                  id="title"
                  width={"100px"}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleFormControlTextarea1 ">
                  Description
                </label>
                <textarea
                  className="form-control mt-2"
                  name="description"
                  value={user.description}
                  onChange={handlechange}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-3"
                onClick={submitclick}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="d-flex justify-content-center mt-5 mb-5">
          <a href="/Shownote" onClick={Shownote} className="gca m-2">
            Shownote
          </a>
        </div>
      </div>
    </div>
  );
}
