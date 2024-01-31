import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-black h-screen text-white">
      <Header />
      <Outlet />
      <div className="fixed bottom-10 inset-x-0 flex justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default App;
