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

// images
import Bitcoin from "../../assets/bitcoin.jpg";
import Bitcoin1 from "../../assets/bitcoin1.jpeg";
import Bitcoin2 from "../../assets/bitcoin2.jpg";
import Bitcoin3 from "../../assets/bitcoin3.jpg";
import CryptoWhale from "../../assets/Crypto-Whale.png";
import ElonMusk from "../../assets/elon_musk.png";
import Valuation from "../../assets/valuation.png";
import Icon from "../../assets/icon.png";

import News from "../News";

const tiles = [
  {
    title: "Crypto Whale Tracker",
    description:
      "A visual depiction that follows and shows big moves or transactions performed by crypt whales within the blockchain network. The dashboard gives updates on significant crypto transactions and provides information on these key players moves within the ecosystem.",
    image: CryptoWhale,
  },
  {
    title: "Influence Explorer",
    description:
      "Provides insights into the impact of Elon Musk's tweets on the cryptocurrency and stock markets. As one of the most influential figures in the tech and business world, Elon Musk's tweets have been known to cause significant fluctuations in the prices of cryptocurrencies and related stocks.",
    image: ElonMusk,
  },
  {
    title: "CryptoValuation Hub",
    description:
      "Is a comprehensive and visually engaging platform that provides insights into the cryptocurrency market's overall valuation. It offers a holistic view of the total market capitalization of all cryptocurrencies combined, reflecting the current state and trends in the digital asset space.",
    image: Valuation,
  },
  // {
  //   title: "Crypto Whale Tracker",
  //   description:
  //     "A visual depiction that follows and shows big moves or transactions performed by crypt whales within the blockchain network. The dashboard gives updates on significant crypto transactions and provides information on these key players moves within the ecosystem.",
  //   image: Bitcoin3,
  // },
];
const URLs = {
  binanceURL: "https://www.binance.com/en",
  WhaleAlert: "https://whale-alert.io/",
  CoinMarketCap: "https://coinmarketcap.com/",
  TheBlock: "https://www.theblock.co/",
};

export default function LandingPage() {
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
            <span onClick={() => window.open(URLs.TheBlock, "_blank")}>
              The Block
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
        <News />
      </div>
    </div>
  );
}
