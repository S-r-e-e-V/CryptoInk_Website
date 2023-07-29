import React from "react";
import "./SelectedContent.css";
export default function SelectedContent({ image }) {
  return (
    <div className="selected-content">
      <img src={image} />
    </div>
  );
}
