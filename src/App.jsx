import { useState, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Dashboard from "./components/Dashboard";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Dashboard />
    </ThemeContext.Provider>
  );
}

export default App;
