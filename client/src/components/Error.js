import React from "react";

const Error = ({ error }) => {
  return (
    <div>
      <div className="alert alert-danger">{error}</div>
    </div>
  );
};

export default Error;
