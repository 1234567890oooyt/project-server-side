import React from "react";
import { Routes } from "react-router-dom";
import { Router, Route, } from "react-router-dom";
import AdminPanel from "./main/admin/AdminPanel";
import Header from "./main/Header";
import Description from "./main/Description";
import FormLanding from "./main/FormLanding";
import Footer from "./main/Footer";
import Menu from "./main/admin/Menu";
import LandingBlock from "./main/LandingBlock";
import LandingBlock_2 from "./main/LandingBlock_2";
import News from "./main/News";
import GalaryGrid from "./main/GalaryGrid";
import CallBackEmail from "./main/CallBackEmail";
import ITservices from "./pages/ITservices";
import Home from "./pages/Home";
function App() {
  return (
    
    <div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/itservices" element={<ITservices/>} />
    </Routes>
    </div>

// <AdminPanel />
  );
}








export default App;
