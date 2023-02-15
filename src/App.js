import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import NoteState from "./context/notes/NoteState";
import Login from "./component/Login";
import Signup from "./component/Signup";
import AlertState from "./context/AlertState";
import Alert from "./component/Alert";
import { createContext } from "react";

function App() {
  const alertContext = createContext();
  return (
    <>
      <AlertState>
        <NoteState>
          <BrowserRouter>
            <Navbar />

            <Alert />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/signup" element={<Signup />}></Route>
            </Routes>
          </BrowserRouter>
        </NoteState>
      </AlertState>
    </>
  );
}

export default App;
