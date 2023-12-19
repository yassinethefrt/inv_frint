import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Index = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="">
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <h1>hello admin</h1> */}
    </div>
  );
};

export default Index;
