// Hello World!
import React from "react";
import "./ComDefault.css";

function Main() {
  return (
    <div className="Com">
      <h1>Hello World!</h1>
      <h2>{new Date().toLocaleString()}</h2>
    </div>
  );
}

export default Main;
