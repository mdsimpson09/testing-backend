import React from 'react';
import NavRoutes from './Routes/NavRoutes';
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Meetpage from "./components/MeetPage";
import PlayerCard from "./components/PlayerCard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
   
     <Route exact path="/" element={<Homepage/>} />
            
    
  
     </BrowserRouter>
</div>
)};

export default App; 