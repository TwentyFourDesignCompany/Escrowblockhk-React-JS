import React from "react";
import { Link } from "react-router-dom";
import sellBictvoinSvg from "../assets/sellBictvoinSvg.svg";
import InputBox from "../components/InputBox";
import SelectBox from "../components/SelectBox";

export default function SellBitCoin() {
  return (
    <>
      <div style={{ marginTop: "4.6em" }} className="login__container__header">
        <div className="login__container__left">
          <div className="register__section__forms__content__heading">
            Sell Bitcoin
          </div>
          <div className="register__section__forms__content__para">
            Escrow Block KYC Forms Below are links for Individuals or
            Corporations who wish to setup an Escrow Block OTC which will enable
            you easily purchase your bitcoin from us. Please select the form
            that best describes your account type.
          </div>

          <div className="register__section__forms__content__inputs__one">
            <SelectBox
              variant="select"
              placeholder="Sell "
              required={true}
              option1={<option value="USD" />}
              option2={<option value="EUROS" />}
              option3={<option value="GBP" />}
              option4={<option value="NAIRA" />}
              type="text"
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox placeholder="Pay via" required={true} type="text" />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Transaction Amount"
              required={true}
              type="number"
            />
          </div>
          <button
            style={{ marginTop: "2em", padding: "1em 4em" }}
            className="button__secondary"
            // onClick={() => {
            //   window.scrollTo({
            //     top: 0,
            //     behavior: "smooth",
            //   });
            // }}
          >
            Submit Offer
          </button>
        </div>
        <div className="login__container__right">
          <img
            src={sellBictvoinSvg}
            alt="sellBitcoinSvg"
            className="login__container__right__img"
          />
        </div>
      </div>
    </>
  );
}

{
  /* <div className="register__section__forms">
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
</div> */
}
