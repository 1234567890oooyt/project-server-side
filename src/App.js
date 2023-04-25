import React from "react";
import { Routes } from "react-router-dom";
import { Route, } from "react-router-dom";
import ITservices from "./pages/ITservices";
import Home from "./pages/Home";
import Header from "./main/Header";
import Article from "./pages/components/article";
import SubMenu from "./pages/components/sub-menu";
import Footer from "./main/Footer";

function App () {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/it-services" element={<ITservices />} />
        <Route path="/it-services/articles" element={<SubMenu />} />
        <Route path="/it-services/articles/:articleId" element={<Article />} />

      </Routes>
      <Footer />
    </div>
  );
}








export default App;
