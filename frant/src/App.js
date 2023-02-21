import "./App.css";
import Navbar from "./Component/Navbar";
import Sing_in from "./Component/Sing_in";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Welcom from "./Component/Welcom";
import Addnote from "./Component/Addnote";
import Shownote from "./Component/Shownote";
import Middle from "./Component/Middle";
import Alluser from "./Component/Alluser";
import MiddleUser from "./Component/MiddleUser";
import Logout from "./Component/Logout";
import { Sing_Up } from "./Component/Sing_Up";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Welcom />} />
          <Route exact path="/sign_up" element={<Sing_Up />} />
          <Route exact path="/login" element={<Sing_in />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/addnote" element={<Addnote />} />
          <Route exact path="/Shownote" element={<Shownote />} />
          <Route exact path="/middle" element={<Middle />} />
          <Route exact path="/alluser" element={<Alluser />} />
          <Route exact path="/verify" element={<MiddleUser />} />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
