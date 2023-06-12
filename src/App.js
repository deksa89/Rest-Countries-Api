import React, { useState } from "react";
import CountriesList from "./components/CountriesList";
import { FaMoon } from "react-icons/fa";

import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // console.log("theme: ", theme)

  return (
    <div className={`app-${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className={`app__header-${theme === 'dark' ? 'dark' : 'light'}`}>
        <h1 className={`app__title-${theme === 'dark' ? 'dark' : 'light'}`}>Where in the world?</h1>
        <button className={`app__theme-toggle-${theme === 'dark' ? 'dark' : 'light'}`} onClick={toggleTheme}>
          <FaMoon style={{fontSize: '20px'}} /><p className="app__theme-toggle-mode">Dark Mode</p>
        </button>
      </div>
      <CountriesList theme={theme} />
    </div>
  );
};

export default App;
