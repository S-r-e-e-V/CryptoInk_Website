import React from "react";
import { useNavigate } from "react-router";
import "./SelectedContent.css";
export default function SelectedContent({ title, description, link, image }) {
  const navigator = useNavigate();
  return (
    <div className="selected-content">
      <div className="selected-content-details">
        <div className="selected-content-title">{title}</div>
        <div className="selected-content-desciption">{description}</div>
        <span
          className="selected-content-link"
          onClick={() => navigator(link)}
          // onClick={() => window.open(link, "_blank", "rel=noopener noreferrer")}
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
