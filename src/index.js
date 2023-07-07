import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import './style.scss'
import Header from "./Components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Header />
    <Routes>
      
      <Route index element={<Home />} />
      <Route exact path="/:id" element={<Show />} />
    </Routes>
  </BrowserRouter>
);
