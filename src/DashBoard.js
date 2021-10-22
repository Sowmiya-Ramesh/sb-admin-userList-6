import React from "react";
import Footer from "./Footer.js";
import Projects from "./Projects.js";
import Earnings from "./Earnings";
import ColorCards from "./ColorCards.js";
import "./styles.css";

export default function DashBoard() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <Earnings />
      <div className="row">
        <Projects />
        <Footer />
      </div>
      <div className="row">
        <ColorCards />
      </div>
    </div>
  );
}
