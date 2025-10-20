import React from "react";
import "./DownloadButton.css"; 

const DownloadButton = ({ text, file }) => {
  return (
     <a
      href={process.env.PUBLIC_URL + file}
      download
      className="arrow-button-d"
    >
      <span className="text-arrow-d">{text}</span>
      <span className="arrow-d">&rarr;</span>
    </a>
  );
};

export default DownloadButton;





   
