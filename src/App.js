import "./App.css";
import TableauReport from "tableau-react";
import LandingPage from "./components/LandingPage";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <div className="app">
      <AppContextProvider>
        <LandingPage />
      </AppContextProvider>
    </div>
  );
}

export default App;
