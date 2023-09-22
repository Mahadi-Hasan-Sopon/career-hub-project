// import React from 'react'

import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function MainLayout() {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d]">
        <Navbar />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
