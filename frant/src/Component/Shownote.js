import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Shownote() {
  let TOKEN = localStorage.getItem("token");
  let navigate = useNavigate();

  const [note, setNote] = useState([]);
  const addnote = () => {
    navigate("/addnote");
  };
  const deletenote = (_id) => {
    console.log(_id);
    try {
      axios
        .delete(`http://localhost:5000/delete/${_id}`, {
          headers: { token: TOKEN },
        })
        .then(() => {
          window.alert("Not is Deleted");
        })
        .catch((err) => {
          console.log(err);
          window.alert(err);
        });
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  };

  useEffect(() => {
    if (!TOKEN) {
      navigate("/login");
    } else {
      try {
        axios
          .get("http://localhost:5000/allnote", {
            headers: { token: TOKEN },
          })
          .then((res) => {
            setNote(res.data.notes);
            // window.alert(res.data.message);
          });
      } catch (error) {
        console.log(error);
        window.alert(error);
      }
    }
  }, [deletenote]);

  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <h2> Show User Added AllNotes</h2>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <a href="/addnote" onClick={addnote} className="gca m-2">
          Addnote
        </a>
      </div>
      <hr className="mb-5" />
      <div className="container mb-5">
        <div className="row bg-white g-4">
          {note &&
            note.map((notes) => {
              return (
                <div
                  className="col-xs-10 col-sm-6 col-md-4 col-lg-3"
                  key={notes._id}
                >
                  <div className="card h-100">
                    <div className="card-body h-100 d-flex flex-column align-items-start justify-content-between">
                      <div>
                        <h5 className="card-title text">{notes.title}</h5>
                        <p className="card-text text-dark">
                          {notes.description}
                        </p>
                      </div>
                      <a
                        className="btn btn-danger"
                        onClick={() => {
                          deletenote(notes._id);
                        }}
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
