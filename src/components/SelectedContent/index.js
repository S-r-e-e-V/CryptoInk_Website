import React from "react";
import "./SelectedContent.css";
export default function SelectedContent({ title, description, link, image }) {
  return (
    <div className="selected-content">
      <div className="selected-content-details">
        <div className="selected-content-title">{title}</div>
        <div className="selected-content-desciption">{description}</div>
        <span
          className="selected-content-link"
          onClick={() => window.open(link, "_blank")}
        >
          Launch
        </span>
      </div>
      <div className="selected-content-image">
        <img src={image} />
        <span className="layer1"></span>
        {/* <span className="layer2">.</span> */}
      </div>
    </div>
  );
}
