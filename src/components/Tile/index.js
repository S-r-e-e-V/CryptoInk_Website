import React from "react";
import "./Tile.css";

export default function Tile({ image, description, click }) {
  return (
    <div className="tile" onClick={click}>
      <img src={image} />
      <span>{description}</span>
    </div>
  );
}
