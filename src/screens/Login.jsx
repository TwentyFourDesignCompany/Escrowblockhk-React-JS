import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import waveBG from "../assets/waveBg.svg";
import InputBox from "../components/InputBox";
import loginSvg from "../assets/loginSvg.svg";

export default function Login({ setNoHeaderFooter }) {
  useEffect(() => {
    setNoHeaderFooter(true);
    return () => {
      setNoHeaderFooter(false);
    };
  }, []);

  return (
    <>
      <div action="" className="login__container">
        <div className="login__container__left">
          <div className="login__container__left__heading">
            Log In With Escroblockh
          </div>

          <form className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Your Phone or Email"
              required={true}
              type="text"
            />
          </form>
          <div className="register__section__forms__content__inputs__one">
            <InputBox placeholder="Password" required={true} type="password" />
          </div>
          <div className="login__links__wrapper register__section__forms__content__inputs__one">
            <div>
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
            <Link to="/forgot-password" className="login__forgot">
              Forgot Password ?
            </Link>
          </div>
          <div
            style={{ marginTop: 50 }}
            className="register__section__forms__content__btns"
          >
            <Link
              style={{ padding: "1em 8em" }}
              to="/transaction"
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
            <div style={{ color: "#000000" }} className="new__to__login">
              New on Escrowblockh?
              <span>
                <Link to="/register"> Click here to Register</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="login__container__right">
          <img
            src={loginSvg}
            alt="loginSvg"
            className="login__container__right__img"
          />
        </div>
      </div>
    </>
  );
}
