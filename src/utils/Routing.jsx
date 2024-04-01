
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Box from '../components/Box';
import High from '../components/High';
function Routing(){
    return(
      <Routes>
      <Route path="/bubble-game" element={<Home />} />
      <Route path="/bubble-game/box" element={<Box />} />
      <Route path="/bubble-game/high" element={<High />} />

      </Routes>
    )
}
export default Routing