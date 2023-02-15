import React, { useEffect } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

function About() {
  const a = useContext(noteContext);

  return <>{"this is About"}</>;
}

export default About;
