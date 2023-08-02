import "./App.css";
import TableauReport from "tableau-react";
import LandingPage from "./components/LandingPage";
import { AppContextProvider } from "./context/AppContext";
import Router from "./routes/routes";

function App() {
  return (
    <div className="app">
      <AppContextProvider>
        {/* <LandingPage /> */}
        <Router />
      </AppContextProvider>
    </div>
  );
}

export default App;
