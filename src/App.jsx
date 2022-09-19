import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./home";
import Shop from "./shop";

import BarLoader from "react-spinners/BarLoader";

export default function App() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader w-full h-screen bg-black flex items-center justify-center">
          <BarLoader color="#ff8200" />
        </div>
      ) : (
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}
