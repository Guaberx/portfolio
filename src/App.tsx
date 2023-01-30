import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Views/Home";

import { RouterProvider } from "react-router-dom";

import router from "./Routes/Router";

import { ThemeContext } from "./Contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState<"light" | "dark" | "otro">("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>
        <RouterProvider router={router} />;
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
