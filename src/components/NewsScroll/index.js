import React from "react";
import "./NewsScroll.css";
import news from "../../constant/news";

// images
import newsIcon from "../../assets/news.png";

export default function NewsSroll() {
  return (
    <div className="scroll-container">
      <div className="scroll-text">
        {news.map((newsData, index) => (
          <p onClick={() => window.open(newsData.link, "_blank")}>
            {newsData.description}
            {index !== newsData.length && <img src={newsIcon} />}
          </p>
        ))}
      </div>
    </div>
  );
}
