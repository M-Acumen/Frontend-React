import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Landing from '../pages/Landing';
import Home from '../pages/Home'
import Chat from "../pages/Chat";

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing /> }/>
      <Route path="/home" element={<Home />} />
      <Route path="/chatme" element={<Chat />} />
    
    </Routes>
  );
};

export default Routers;
