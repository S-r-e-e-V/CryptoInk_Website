import React from "react";
import TableauComponent from "../TableauComponent";

export default function InfluenceExplorer() {
  const url =
    "https://public.tableau.com/views/InfluenceExplorer/InfluenceExplorer";

  return <TableauComponent url={url} />;
}
