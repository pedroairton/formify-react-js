import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Forme from "./Forme";
import Erro from "./Erro";

import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home />} /> 
               <Route path="/" element={<Forme />} /> Correção aqui
               <Route path="*" element={<Erro />} /> 
            </Routes>            
        </BrowserRouter>
    )
  }

export default App