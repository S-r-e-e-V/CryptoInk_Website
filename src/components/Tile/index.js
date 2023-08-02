import React from "react";
import "./Tile.css";

export default function Tile({ image, title, click }) {
  return (
    <div className="tile" onClick={click}>
      <img src={image} />
      <span>{title}</span>
    </div>
  );
}
