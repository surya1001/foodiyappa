import React from "react";

const Message = ({ message }) => {
  return (
    <div>
      <div className="alert alert-success" role="alert">
        {message}
      </div>
    </div>
  );
};

export default Message;
