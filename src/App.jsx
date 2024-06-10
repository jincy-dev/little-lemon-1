import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Header,
  Main,
  Footer,
  Reservations,
  OrderOnline,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { headerData, reservationData, orderOnline } from "./constants";
import DataContext from "./DataContext";
import ConfirmedBooking from "./components/Reservations/ConfirmedBooking";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  let data = {};
  if (path === "/" || path === "/Little-Lemon") {
    data = headerData;
  } else if (path === "/Reservations") {
    data = reservationData;
  } else if (path === "/OrderOnline") {
    data = OrderOnline;
  }

  return (
    <Router>
      <>
        <Navbar />
        <DataContext.Provider value={data}>
          <Routes>
            <Route
              path="/Little-Lemon"
              element={
                <>
                  <Header />
                  <Main />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Main />
                </>
              }
            />
            <Route
              path="/Reservations"
              element={
                <>
                  <Header />
                  <Reservations />
                </>
              }
            />
            <Route
              path="/OrderOnline"
              element={
                <>
                  <Header />
                  <OrderOnline />
                </>
              }
            />
            {/* Path for booking confirmation */}
            <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
          </Routes>
        </DataContext.Provider>
        <Footer />
      </>
    </Router>
  );
}

export default App;
