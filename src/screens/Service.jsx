import React from "react";
import { Link } from "react-router-dom";
import waveBG from "../assets/waveBg.svg";
import ServiceCard from "../components/ServiceCard";

export default function Service() {
  return (
    <>
      <div className="register__section">
        <img src={waveBG} alt="waveBG" className="register__section__img" />
        <div className="register__section__content">
          <div
            style={{ color: "#000000" }}
            className="home__section__carousel__entry__overlay__content__heading"
          >
            Our Services
          </div>
        </div>
      </div>
      <div className="register__section__forms">
        <div className="register__section__forms__content__services">
          <ServiceCard
            title="Capital Markets"
            para="
Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses."
          />
          <ServiceCard
            title=" Insurance"
            para=" Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses. "
          />
          <ServiceCard
            title=" Blockchain"
            para="Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.
 "
          />
          <ServiceCard
            title=" Technology Advisory"
            para="
            Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.
            
            
 "
          />
          <ServiceCard
            title=" Finance & Risk"
            para="
            Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.
            
            
 "
          />
          <ServiceCard
            title=" Portfolio Management"
            para="
            Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.
            
            
 "
          />
        </div>
      </div>
    </>
  );
}
