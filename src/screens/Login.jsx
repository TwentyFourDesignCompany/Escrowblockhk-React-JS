import React from "react";
import { Link } from "react-router-dom";
import waveBG from "../assets/waveBg.svg";
import InputBox from "../components/InputBox";

export default function Login() {
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
            Escrowblock
          </div>
        </div>
      </div>
      <form action="" className="login__container">
        <div className="register__section__forms__content__inputs__one">
          <InputBox placeholder="Enter Username" required={true} type="text" />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox placeholder="Password" required={true} type="password" />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <input
            className="styled-checkbox"
            id="styled-checkbox"
            type="checkbox"
            name="female"
          />
          <label
            style={{ color: "#1c0a15", fontSize: 16 }}
            htmlFor="styled-checkbox"
          >
            Keep me signed in
          </label>
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
            Login
          </Link>
          <Link to="/register" className="button__secondary">
            Register
          </Link>
        </div>
      </form>
    </>
  );
}
