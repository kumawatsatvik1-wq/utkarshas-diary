import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "./App"
import Birthday from "./pages/Birthday"
import Sad from "./pages/sad"
import Nervous from "./pages/Nervous"
import Bored from "./pages/Bored"
import MissMe from "./pages/MissMe"
import Mad from "./pages/Mad"
import Songs from "./pages/songs"
import Memory from "./pages/Memory"
import Love from "./pages/Love"
import "./App.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/birthday" element={<Birthday />} />
      <Route path="/sad" element={<Sad />} /> 
      <Route path="/nervous" element={<Nervous />} />
      <Route path="/bored" element={<Bored />} />
      <Route path="/missme" element={<MissMe />} />
      <Route path="/mad" element={<Mad />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/memory" element={<Memory />} />
      <Route path="/love" element={<Love />} />
    </Routes>
  </BrowserRouter>
)