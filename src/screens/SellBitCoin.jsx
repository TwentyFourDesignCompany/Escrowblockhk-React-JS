import React from "react";
import { Link } from "react-router-dom";
import waveBG from "../assets/waveBg.svg";

export default function SellBitCoin() {
  return (
    <>
      <div className="register__section">
        <img src={waveBG} alt="waveBG" className="register__section__img" />
        <div className="register__section__content">
          <div
            style={{ color: "#000000" }}
            className="home__section__carousel__entry__overlay__content__sub__heading"
          >
            WELCOME TO
          </div>
          <div
            style={{ color: "#000000" }}
            className="home__section__carousel__entry__overlay__content__heading"
          >
            Registration
          </div>
        </div>
      </div>
      <div className="register__section__forms">
        <div className="register__section__forms__content">
          <div className="register__section__forms__content__heading">
            Sell Bitcoin
          </div>
          <div className="register__section__forms__content__para">
            Escrow Block KYC Forms Below are links for Individuals or
            Corporations who wish to setup an Escrow Block OTC which will enable
            you easily purchase your bitcoin from us. Please select the form
            that best describes your account type.
          </div>
          <div className="register__section__forms__content__btns">
            <Link
              style={{ marginRight: "1em" }}
              to="/individual-register"
              className="button__secondary"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Individual
            </Link>
            <Link
              to="/individual-register"
              className="button__secondary"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Corporate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
