import React from "react"
import { Route, Routes } from "react-router"
import HomeScreen from "./screens/HomeScreen"
import "./App.scss"
import Register from "./screens/Register"
import RegisterIndividual from "./screens/RegisterIndividual"
import Login from "./screens/Login"
import AboutUs from "./screens/AboutUs"
import SellBitCoin from "./screens/SellBitCoin"
import Transaction from "./screens/Transaction"
import BuyBitCoin from "./screens/BuyBitCoin"
import TradeForMe from "./screens/TradeForMe"
import SideLogin from "./screens/SideLogin"
import SideRegister from "./screens/SideRigester"
import ForexTraning from "./screens/ForexTraning"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<Register />} />
        <Route path="/individual-register" element={<RegisterIndividual />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trade-for-me" element={<TradeForMe />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sell-bitcoin" element={<BuyBitCoin />} />
        <Route path="/buy-bitcoin" element={<SellBitCoin />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/side-login" element={<SideLogin />} />
        <Route path="/side-register" element={<SideRegister />} />
        <Route path="/forex-training" element={<ForexTraning />} />
      </Routes>
      <Footer />
    </>
  )
}
