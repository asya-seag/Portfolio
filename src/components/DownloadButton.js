import React from "react";
import "./DownloadButton.css"; 

const DownloadButton = ({ text, file }) => {
  return (
    <a href={file} download className="arrow-button-d">
      <span className="text-arrow-d">{text}</span>
      <span className="arrow-d">&rarr;</span>
    </a>
  );
};

export default DownloadButton;
