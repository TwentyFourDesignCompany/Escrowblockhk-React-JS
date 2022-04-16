import React from "react";
import { Link } from "react-router-dom";
import waveBG from "../assets/waveBg.svg";
import InputBox from "../components/InputBox";
import SelectBox from "../components/SelectBox";
import userPic from "../assets/userPic.jpg";
import openaccount1 from "../assets/open-account1.svg";
import openaccount2 from "../assets/open-account2.svg";
import openaccount3 from "../assets/open-account3.svg";

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

export default function Dashboard() {
  return (
    <>
      <div className="register__section">
        <img src={waveBG} alt="waveBG" className="register__section__img" />
        <div className="register__section__content">
          <div
            style={{ color: "#000000" }}
            className="home__section__carousel__entry__overlay__content__heading"
          >
            User Dashboard
          </div>
        </div>
      </div>
      <div className="user__details__wrapper">
        <div className="user__details__wrapper__img__wrapper">
          <img
            src={userPic}
            alt="userPic"
            className="user__details__wrapper__img"
          />
        </div>
        <div className="user__details__content">
          <div className="user__details__content__heading">
            Whole M. <span>0.0001541 BTC</span>
          </div>
        </div>
      </div>
      <div style={{ margin: "4em 0em" }} className="get__started__now__section">
        <div className="get__started__now__section__content">
          <div className="get__started__now__section__content__heading">
            Quick Actions
          </div>
          <div className="get__started__now__section__content__card">
            <Link
              to="sell-bitcoin"
              className="get__started__now__section__content__card__entry"
            >
              <img
                src={openaccount2}
                alt="openaccount1"
                className="get__started__now__section__content__card__img"
              />
              Buy Bitcoin
            </Link>
            <Link
              to="buy-bitcoin"
              className="get__started__now__section__content__card__entry"
            >
              <img
                src={openaccount3}
                alt="openaccount1"
                className="get__started__now__section__content__card__img"
              />
              Send & Receive
            </Link>
            <Link
              to="/login"
              className="get__started__now__section__content__card__entry"
            >
              <img
                src={openaccount1}
                alt="openaccount1"
                className="get__started__now__section__content__card__img"
              />
              Help
            </Link>
          </div>
        </div>
      </div>
      <form action="" className="transaction__container">
        <div className="trasaction__details__heading">Transaction</div>
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
        <div style={{ marginTop: 40 }} className="trasaction__details__heading">
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
            style={{ marginRight: "1em", padding: "1em 8em" }}
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
