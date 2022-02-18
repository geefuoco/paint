import React, { useState } from "react";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import "./App.scss";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const lightMode = {
    backgroundColor: "#eee",
    color: "#1d1d1d",
  };
  return (
    <div
      className="App"
      data-testid="app"
      style={darkMode ? undefined : lightMode}
    >
      <ToggleSwitch
        top={25}
        left={200}
        handleClick={() => setDarkMode(!darkMode)}
      />
      <Home />
    </div>
  );
};

export default App;
