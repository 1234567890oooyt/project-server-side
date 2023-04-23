import React from "react";
import { Routes } from "react-router-dom";
import { Route, } from "react-router-dom";
import ITservices from "./pages/ITservices";
import Home from "./pages/Home";
import Header from "./main/Header";
import Article from "./pages/article";

function App () {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/it-services" element={<ITservices />} />
        <Route path="/it-services/articles/:articleId" element={<Article />} />
        <Route path="/it-services-info" element={<ITservices />} />

      </Routes>
    </div>
  );
}








export default App;
