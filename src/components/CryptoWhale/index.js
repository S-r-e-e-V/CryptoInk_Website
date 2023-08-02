import React from "react";
import TableauComponent from "../TableauComponent";

export default function CryptoWhale() {
  const url =
    "https://public.tableau.com/views/Whaletracker/Daily_Whale_Dashboard";

  return <TableauComponent url={url} />;
}
