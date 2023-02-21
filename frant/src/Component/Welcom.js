import React from "react";

export default function Welcom() {
  return (
    <div>
      <div className="d-flex justify-content-center ali ">
        <div>
          <h1 className="text-dark">WellCome To User NoteBook</h1>
          <div className="d-flex justify-content-center ">
            <a href="/sign_up" className="gca m-2">
              Sign-up
            </a>
            <a href="/login" className="gca m-2">
              Sign-in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
