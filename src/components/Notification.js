import React from "react";

const Notification = ({ message, styleMessage }) => {
    if (message === null) {
      return null;
    }
  
    return <div style={styleMessage}>{message}</div>;
  };

  export default Notification