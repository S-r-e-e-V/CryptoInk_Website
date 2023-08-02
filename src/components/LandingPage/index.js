import React, { useState, useContext, useEffect } from "react";
import "./LandingPage.css";

// app context
import { AppContext } from "../../context/AppContext";

// react-icons
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { IconContext, icons } from "react-icons";

// components
import Tile from "../Tile";
import SelectedContent from "../SelectedContent";
import News from "../News";

// images
import Icon from "../../assets/icon.png";

// constants
import URLs from "../../constant/urls";
import tiles from "../../constant/tiles";
import NewsSroll from "../NewsScroll";

const LandingPage = () => {
  const { theme, setTheme } = useContext(AppContext);

  if (localStorage.getItem("crypto_ink-theme")) {
    document.documentElement.className = theme;
  }

  const [selectedTile, setselectedTile] = useState(0);
  const handleTheme = (theme) => {
    localStorage.setItem("crypto_ink-theme", theme);
    document.documentElement.className = theme;
    setTheme(theme);
  };

  return (
    <div className="landing-page">
      <div className="header-section">
        <div className="header">
          <img className="icon" src={Icon} />
          <div className="titles">
            <span onClick={() => window.open(URLs.binanceURL, "_blank")}>
              Binance
            </span>
            <span onClick={() => window.open(URLs.WhaleAlert, "_blank")}>
              Whale Alert
            </span>
            <span onClick={() => window.open(URLs.CoinMarketCap, "_blank")}>
              Coin Markey Cap
            </span>
            <span onClick={() => window.open(URLs.Cointelegraph, "_blank")}>
              Cointelegraph
            </span>
            <div className="mode-section">
              {theme === "light-mode" ? (
                <IconContext.Provider value={{ color: "white", size: "15px" }}>
                  <BsFillMoonFill onClick={() => handleTheme("dark-mode")} />
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ color: "black", size: "15px" }}>
                  <BsFillSunFill onClick={() => handleTheme("light-mode")} />
                </IconContext.Provider>
              )}
            </div>
          </div>
          <span className="layer1"></span>
        </div>
        <div className="selected-tile">
          <SelectedContent
            image={tiles[selectedTile].image}
            title={tiles[selectedTile].title}
            description={tiles[selectedTile].description}
            link={tiles[selectedTile].link}
          />
        </div>
      </div>
      <div className="content">
        <div className="tiles">
          {tiles.map((item, index) => (
            <Tile
              image={item.image}
              title={item.title}
              click={() => {
                setselectedTile(index);
              }}
            />
          ))}
        </div>
      </div>
      <div className="news-section">
        {/* <News /> */}
        <NewsSroll />
      </div>
    </div>
  );
};
export default LandingPage;
