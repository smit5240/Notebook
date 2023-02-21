import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Middle() {
  let Navigate = useNavigate();
  const Shownote = () => {
    Navigate("/Shownote");
  };
  const addnote = () => {
    Navigate("/addnote");
  };

  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <h2>Choise You !!</h2>
      </div>
      <hr className="mb-5" />
      <div className="d-flex justify-content-center mt-3 mb-5">
        <a onClick={Shownote} className="gca m-2">
          Shownote
        </a>

        <a onClick={addnote} className="gca m-2">
          Addnote
        </a>
      </div>
    </div>
  );
}
