import React, { useState, useEffect } from "react";
import Ticker from "react-ticker";
import PageVisibility from "react-page-visibility";

export default function News() {
  const [rates, setRates] = useState([
    "Voyager may have suffered hack, data leak during reopened withdrawal period",
    "ICYMI - Binance Japan launches crypto services with with 34 tokens/virtual currencies",
    "Barbie Hoax Targets Mattel and Fools Some News Outlets",
    "Crypto Analyst Warns Chainlink Positioning for Downside Move, Updates Outlook on Bitcoin and Dogecoin",
    "Ron DeSantis Vows to End Biden’s War on Bitcoin and Cryptocurrency as US President",
    "Tech consultant to stand trial in stabbing death of Cash App founder Bob Lee",
    "CZ Sheds Light on Binance’s Plans About Launching its Own Stablecoin",
    "MoonPay CEO was responsible for $500K donation to Miami mayor’s super PAC",
    "Was Sam Bankman-Fried behind a scam project?",
    "Litecoin strengthens as LTC suffers. Will the halving alter the scenario?",
  ]);
  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible);
  };
  const GetRatesFromAPI = () => {
    // useEffect(() => {
    //   async function fetchData() {
    //     const ratesFromAPI = await makeAPICall();
    //     setRates(ratesFromAPI);
    //   }
    //   fetchData();
    // }, []);
    // A placeholder is needed, to tell react-ticker, that width and height might have changed
    // It uses MutationObserver internally
    return rates ? (
      <p style={{ whiteSpace: "nowrap" }}>{rates.join("  .  ")} </p>
    ) : (
      <p style={{ visibility: "hidden" }}>Placeholder</p>
    );
  };
  console.log(rates);

  return (
    <div className="news">
      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker
            offset="run-in"
            speed={10}
            onFinish={(e) => {
              setPageIsVisible(false);
              setPageIsVisible(true);
            }}
          >
            {() => <GetRatesFromAPI />}
          </Ticker>
        )}
      </PageVisibility>
    </div>
  );
}
