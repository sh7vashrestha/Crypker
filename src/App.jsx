import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import "./style.scss";


function App() {
  return (
   <BrowserRouter>
   <div className="whole-app">
     <Routes>
       <Route path='/crypker' element={<Home />} />
       <Route path='/' element={<Home />} />
       <Route exact path="/:id" element={<Show />} />
     </Routes>
   </div>
 </BrowserRouter>
  )
}

export default App
