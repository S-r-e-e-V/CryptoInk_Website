import React, { useState, useEffect } from "react";
import Ticker from "react-ticker";
import PageVisibility from "react-page-visibility";

import news from "../../constant/news";

export default function News() {
  const [rates, setRates] = useState(news);
  // const [pageIsVisible, setPageIsVisible] = useState(true);

  // const handleVisibilityChange = (isVisible) => {
  //   setPageIsVisible(isVisible);
  // };
  const GetRatesFromAPI = () => {
    // useEffect(() => {
    //   async function fetchData() {
    //     const ratesFromAPI = await makeAPICall();
    //     setRates(ratesFromAPI);
    //   }
    //   fetchData();
    // }, []);
    return rates ? (
      <p style={{ whiteSpace: "nowrap" }}>{rates.join("  .  ")} </p>
    ) : (
      <p style={{ visibility: "hidden" }}>Placeholder</p>
    );
  };
  console.log(rates);

  return (
    <div className="news">
      {/* <PageVisibility onChange={handleVisibilityChange}> */}
      {/* {pageIsVisible && ( */}
      <Ticker
        offset="run-in"
        speed={10}
        // onFinish={(e) => {
        //   setPageIsVisible(false);
        //   setPageIsVisible(true);
        // }}
      >
        {() => <GetRatesFromAPI />}
      </Ticker>
      {/* )}
      </PageVisibility> */}
    </div>
  );
}
