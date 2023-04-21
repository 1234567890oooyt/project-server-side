import React from "react";
import { Router, Route, } from "react-router-dom";
import AdminPanel from "../main/admin/AdminPanel";
import Header from "../main/Header";
import Description from "../main/Description";
import FormLanding from "../main/FormLanding";
import Footer from "../main/Footer";
import Menu from "../main/admin/Menu";
import LandingBlock from "../main/LandingBlock";
import LandingBlock_2 from "../main/LandingBlock_2";
import News from "../main/News";
import GalaryGrid from "../main/GalaryGrid";
import CallBackEmail from "../main/CallBackEmail";
import { Helmet } from "react-helmet";

function Home() {
  return (
    
    <div className="main">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="My page description" />
      </Helmet>
       <LandingBlock />
       <LandingBlock_2 />
       <News/>
       <GalaryGrid/>
       <CallBackEmail/>
     <Footer />
    </div>

// <AdminPanel />
  );
}








export default Home;
