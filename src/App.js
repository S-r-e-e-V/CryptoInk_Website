import "./App.css";
import TableauReport from "tableau-react";

function App() {
  return (
    <div className="App">
      <TableauReport
        url="https://public.tableau.com/views/CryptoAnalyticsDashboard/Crypto?:language=en-US&:display_count=n&:origin=viz_share_link"
        // token="<TRUSTED TICKET HERE>"
      />
    </div>
  );
}

export default App;
