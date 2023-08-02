import React from "react";
import TableauComponent from "../TableauComponent";

export default function CryptoValuationHub() {
  const url = "https://public.tableau.com/views/Coinsmarketcap/marketcaptable";

  return <TableauComponent url={url} />;
}
