
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Box from '../components/Box';
import High from '../components/High';
function Routing(){
    return(
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/box" element={<Box />} />
      <Route path="/high" element={<High />} />

      </Routes>
    )
}
export default Routing