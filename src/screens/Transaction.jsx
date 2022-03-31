import React from "react";
import { Link } from "react-router-dom";
import waveBG from "../assets/waveBg.svg";
import InputBox from "../components/InputBox";

function TransactionEntry() {
  return (
    <div className="register__section__forms__content__history__details__row">
      <div className="register__section__forms__content__history__details__entry">
        March 16, 2022 <span>12:00 PM</span>
      </div>
      <div className="register__section__forms__content__history__details__entry">
        e288452ce3234
      </div>
      <div className="register__section__forms__content__history__details__entry">
        Bitcoin
      </div>
      <div className="register__section__forms__content__history__details__entry">
        BTC <span>0.000135000</span>
      </div>
    </div>
  );
}

export default function Transaction() {
  return (
    <>
      <div className="register__section">
        <img src={waveBG} alt="waveBG" className="register__section__img" />
        <div className="register__section__content">
          <div
            style={{ color: "#000000" }}
            className="home__section__carousel__entry__overlay__content__heading"
          >
            MAKE A DEPOSIT
          </div>
        </div>
      </div>
      <form action="" className="login__container">
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              variant="select"
              placeholder="Select a Wallet"
              required={true}
              type="text"
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              variant="select"
              placeholder="Select a Type"
              required={true}
              type="text"
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            placeholder="Amount to Deposit"
            required={true}
            type="text"
          />
        </div>

        <div className="register__section__forms__content__btns">
          <Link
            style={{ marginRight: "1em" }}
            to="/"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="button__secondary"
          >
            Deposit
          </Link>
        </div>
      </form>
      <div className="register__section__forms__content__history">
        <div className="register__section__forms__content__history__content">
          <div className="register__section__forms__content__history__heading__row">
            <div className="register__section__forms__content__history__heading__entry">
              Date
            </div>
            <div className="register__section__forms__content__history__heading__entry">
              Transaction ID
            </div>
            <div className="register__section__forms__content__history__heading__entry">
              Payment In
            </div>
            <div className="register__section__forms__content__history__heading__entry">
              Amount
            </div>
          </div>
          <TransactionEntry />
          <TransactionEntry />
          <TransactionEntry />
          <TransactionEntry />
          <TransactionEntry />
          <TransactionEntry />
          <TransactionEntry />
          <TransactionEntry />
          <TransactionEntry />
          <TransactionEntry />
          <TransactionEntry />
          <TransactionEntry />
          <TransactionEntry />
          <TransactionEntry />
        </div>
      </div>
    </>
  );
}
