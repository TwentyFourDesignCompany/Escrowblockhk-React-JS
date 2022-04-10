import React from "react";
import { Link } from "react-router-dom";
import waveBG from "../assets/waveBg.svg";
import InputBox from "../components/InputBox";
import SelectBox from "../components/SelectBox";

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
            Transactions
          </div>
        </div>
      </div>
      <form action="" className="login__container">
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <SelectBox
              variant="select"
              placeholder="Buying Currency"
              required={true}
              option1={<option value="USD" />}
              option2={<option value="EUROS" />}
              option3={<option value="GBP" />}
              option4={<option value="NAIRA" />}
              type="text"
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Transaction Amount"
              required={true}
              type="number"
            />
          </div>
        </div>
        <div
          style={{ marginTop: 40 }}
          className="register__section__forms__content__history__heading__entry"
        >
          Receiving Bank Details
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox placeholder="Account Name" required={true} type="text" />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox placeholder="Bank Name" required={true} type="text" />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox placeholder=" Account Number" required={true} type="text" />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            variant="select"
            placeholder="Select Currency"
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
            Submit
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
