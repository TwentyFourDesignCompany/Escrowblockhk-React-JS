import React from "react";
import { Route, Routes } from "react-router";
import HomeScreen from "./screens/HomeScreen";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./screens/Register";
import RegisterIndividual from "./screens/RegisterIndividual";
import Login from "./screens/Login";
import Service from "./screens/Service";
import AboutUs from "./screens/AboutUs";
import SellBitCoin from "./screens/SellBitCoin";
import Transaction from "./screens/Transaction";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<Register />} />
        <Route path="/individual-register" element={<RegisterIndividual />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sell-bitcoin" element={<SellBitCoin />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
      <Footer />
    </>
  );
}
