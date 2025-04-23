import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "./features/header/Header";
import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Bookings from "./pages/Bookings";
import LawyerProfile from "./features/lawyer-details/LawyerProfile";
import { ToastContainer } from "react-toastify";
import GlobalLoader from "./features/loading/GlobalLoader";
import NotFound from "./features/not-found/NotFound";
import Footer from "./features/footer/Footer";

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timeout);
  }, [location]);


  const hideFooterRoutes = ["/not-found", "/contact"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {loading && <GlobalLoader />}
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lawyer/:id" element={<LawyerProfile />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </main>
      {!shouldHideFooter && <Footer />}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
