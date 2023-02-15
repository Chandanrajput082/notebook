import React, { useContext } from "react";
import alertContext from "../context/AlertContext";

function Alert(props) {
  const context = useContext(alertContext);
  const { msg } = context;
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      <div
        className={`alert alert-${msg.type} alert-dismissible fadeshow `}
        role="alert"
      >
        <strong>{capitalize(msg.type)}</strong> {msg.errMsg}
      </div>
    </div>
  );
}
export default Alert;
