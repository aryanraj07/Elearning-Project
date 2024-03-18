import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./context/themeContext";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [themeMode, setThemeMode] = useState();
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    const elem = document.querySelector("html").classList;
    elem.remove("dark", "light");
    elem.add(themeMode);
  }, [themeMode]);
  return (
    <div className="dark:bg-indigo-950 h-screen dark:text-white">
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <Header />
        <ToastContainer />
        <Outlet />

        <div className="  flex justify-center">
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
