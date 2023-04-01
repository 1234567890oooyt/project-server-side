import React from "react";
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
function App() {
  return (
    
    <div className="main">
       <Header />
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







export default App;
