import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Rum from "./pages/AI/AI";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

import Chat from "./pages/Chat/Chat";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stack/:id" element={<Rum />} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
