import React from "react";
import { Link } from "react-router-dom";
import waveBG from "../assets/waveBg.svg";

export default function BuyBitCoin() {
  return (
    <>
      <div className="register__section">
        <img src={waveBG} alt="waveBG" className="register__section__img" />
      </div>
      <div className="register__section__forms">
        <div className="register__section__forms__content">
          <div className="register__section__forms__content__heading">
            Buy Bitcoin
          </div>
          <div className="register__section__forms__content__para">
            Buying Bitcoin is easy and simple with Escrowblock. You only need a
            few steps to buy Bitcoin instantly.
          </div>
          <div className="register__section__forms__content__para__2nd">
            Millions of global crypto users trust us. Our robust and
            straightforward system is secure and your funds are insured with us
            while you trade.
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
