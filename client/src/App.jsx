import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/properties" element={<PropertiesPage />}></Route>{" "}
						<Route path="*" element={<NotFound />} />

          </Routes>
          <ToastContainer/>

        </main>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
