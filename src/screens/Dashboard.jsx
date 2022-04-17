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
      <div
        style={{
          color: "#000000",
          textAlign: "center",
          fontSize: 26,
          marginTop: 20,
          fontWeight: 600,
        }}
        className="home__section__carousel__entry__overlay__content__heading"
      >
        Account Level
      </div>
      <div className="trade__container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="73.125"
          height="78.809"
          viewBox="0 0 73.125 78.809"
        >
          <g id="shield-svgrepo-com" transform="translate(-11.461 0)">
            <path
              id="Path_9207"
              data-name="Path 9207"
              d="M48.024,78.808a2.479,2.479,0,0,1-.756-.118,42.229,42.229,0,0,1-20.92-15.1A67.625,67.625,0,0,1,15.828,42.13a104.585,104.585,0,0,1-4.367-27.45A2.48,2.48,0,0,1,13.7,12.212c.191-.019,19.448-2,32.865-11.739a2.479,2.479,0,0,1,2.914,0c13.413,9.744,32.672,11.72,32.865,11.739a2.481,2.481,0,0,1,2.24,2.468,104.593,104.593,0,0,1-4.367,27.45A67.63,67.63,0,0,1,69.7,63.593a42.227,42.227,0,0,1-20.92,15.1A2.484,2.484,0,0,1,48.024,78.808ZM16.491,16.855A103.22,103.22,0,0,0,20.608,40.8c5.307,17.412,14.529,28.481,27.416,32.913,12.917-4.442,22.15-15.548,27.45-33.026a103.005,103.005,0,0,0,4.084-23.835C74,16.045,59.614,13.3,48.024,5.5,36.432,13.3,22.046,16.045,16.491,16.855Z"
              transform="translate(0 0)"
            />
            <path
              id="Path_9208"
              data-name="Path 9208"
              d="M118.865,131.267a2.479,2.479,0,0,1-1.611-.6L108.287,123a2.479,2.479,0,0,1,3.223-3.769l6.973,5.963L132.3,107.07a2.479,2.479,0,1,1,3.943,3.006l-15.411,20.214a2.479,2.479,0,0,1-1.71.963A2.517,2.517,0,0,1,118.865,131.267Z"
              transform="translate(-72.166 -79.789)"
            />
          </g>
        </svg>
        <div className="trade__container__heading">
          Level 3<span>Unlimited trades and send outs</span>
        </div>
      </div>
      <div style={{ margin: "4em 0em" }} className="get__started__now__section">
        <div className="get__started__now__section__content">
          <div className="get__started__now__section__content__heading">
            Quick Actions
          </div>
          <div className="get__started__now__section__content__card">
            <Link
              to="/sell-bitcoin"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
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
              to="/buy-bitcoin"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="get__started__now__section__content__card__entry"
            >
              <img
                src={openaccount3}
                alt="openaccount1"
                className="get__started__now__section__content__card__img"
              />
              Sell Bitcoin
            </Link>
            <Link
              to="/login"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
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
