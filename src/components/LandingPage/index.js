import React, { useState, useContext } from "react";
import "./LandingPage.css";

// app context
import { AppContext } from "../../context/AppContext";

// react-icons
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { IconContext } from "react-icons";

// components
import Tile from "../Tile";
import SelectedContent from "../SelectedContent";

// images
import Bitcoin from "../../assets/bitcoin.jpg";
import Bitcoin1 from "../../assets/bitcoin1.jpeg";
import Bitcoin2 from "../../assets/bitcoin2.jpg";
import Bitcoin3 from "../../assets/bitcoin3.jpg";

const tiles = [
  { image: Bitcoin, description: "Sample" },
  { image: Bitcoin1, description: "Sample" },
  { image: Bitcoin2, description: "Sample" },
  { image: Bitcoin3, description: "Sample" },
];

export default function LandingPage() {
  const { theme, setTheme } = useContext(AppContext);

  const [selectedTile, setselectedTile] = useState(0);
  const handleTheme = (theme) => {
    localStorage.setItem("crypto_ink-theme", theme);
    document.documentElement.className = theme;
    setTheme(theme);
  };
  console.log(selectedTile);
  const handle = (e) => {
    console.log(e);
  };
  return (
    <div className="landing-page">
      <div className="header-section">
        <div className="header">
          <span>Crypto Ink</span>
          <div className="titles">
            {theme === "light-mode" ? (
              <IconContext.Provider value={{ color: "blue", size: "20px" }}>
                <BsFillMoonFill onClick={() => handleTheme("dark-mode")} />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ color: "white", size: "20px" }}>
                <BsFillSunFill onClick={() => handleTheme("light-mode")} />
              </IconContext.Provider>
            )}
          </div>
        </div>
        <div className="selected-tile">
          <SelectedContent image={tiles[selectedTile].image} />
        </div>
      </div>
      <div className="content">
        <div className="tiles">
          {tiles.map((item, index) => (
            <Tile
              image={item.image}
              description={item.description}
              click={() => {
                setselectedTile(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
