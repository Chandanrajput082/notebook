import React from "react";
import { useState } from "react";
import alertContext from "./AlertContext";

function AlertState(props) {
  const [msg, setMsg] = useState({
    errMsg: "",
    type: "",
  });
  const alert = (msg, type) => {
    setMsg({
      errMsg: msg,
      type: type,
    });
    setTimeout(() => {
      setMsg({
        errMsg: "",
        type: "",
      });
    }, 1000);
  };

  return (
    <alertContext.Provider value={{ msg ,alert }}>
      {props.children}
    </alertContext.Provider>
  );
}

export default AlertState;
