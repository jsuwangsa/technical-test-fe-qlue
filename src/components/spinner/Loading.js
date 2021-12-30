import "./Loading.css";
import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="spinner-container">
      <Spinner size="lg" animation="border" role="status" />
      <h2 className="loading-title">Please Wait . . .</h2>
    </div>
  );
};

export default Loading;
