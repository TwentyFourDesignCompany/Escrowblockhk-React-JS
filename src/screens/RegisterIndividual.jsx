import React from "react";
import { Link } from "react-router-dom";
import waveBG from "../assets/waveBg.svg";
import InputBox from "../components/InputBox";

export default function RegisterIndividual() {
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
            Individual Account Registration
          </div>
        </div>
      </div>
      <div className="register__section__forms">
        <div className="register__section__forms__content">
          <div className="register__section__forms__content__para">
            Thank you for your interest in registering for an Escrow Block
            account. You will be required to upload your Passport and Proof of
            Residential Address (bank statement/utility bill no older than 3
            months) at the end of this form. Please have them ready before you
            begin. Once you have submitted your application, we aim to process
            your account as soon as possible. Our compliance officer will notify
            you by email upon successful verification and a dedicated trading
            group will be set up for you. Should you have any questions, please
            contact us at contact@escrowblockhk.com. Please note the minimum
            deposit or withdrawal size is $10,000
          </div>
        </div>
      </div>
      <form
        action=""
        className="register__section__forms__content__inputs__wrapper"
      >
        <div className="register__section__forms__content__inputs__one">
          <InputBox placeholder="Username" required={true} type="text" />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox placeholder="First Name" required={true} type="text" />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox placeholder="Last Name" required={true} type="text" />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox placeholder="E-mail Address" required={true} type="email" />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Preferred Communication
"
              required={true}
              type="text"
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Alias/Other/Former Name(s)(if any):
"
              type="text"
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            placeholder="Gender"
            required={true}
            variant="select"
            type="text"
          />
        </div>
        <div
          style={{ marginTop: 8 }}
          className="register__section__forms__content__inputs__one"
        >
          <InputBox placeholder="" required={true} type="date" />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Country of Origin"
              required={true}
              type="text"
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Your Passport or ID number"
              required={true}
              type="text"
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox placeholder="Mobile Number" required={true} type="text" />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox placeholder="Telegram (If Any)" type="text" />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox placeholder="Street Address" required={true} type="text" />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox placeholder="City" required={true} type="text" />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox placeholder="Country" required={true} type="text" />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="State/Province/Region"
              required={true}
              type="text"
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Zip or Post Code"
              required={true}
              type="text"
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            placeholder="Social Security Number (if applicable):"
            type="text"
          />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Gross Annual Income"
              required={true}
              variant="select"
              type="text"
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Employment Status"
              required={true}
              variant="select"
              type="text"
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Occupation"
              required={true}
              variant="select"
              type="text"
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Name of Your Company/Employer"
              required={true}
              type="text"
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            placeholder="Source of Funds              "
            required={true}
            variant="select"
            type="text"
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            placeholder="Please state your Purpose of Opening an Escrowblockhk account              "
            required={true}
            variant="select"
            type="text"
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            placeholder="Expected Transaction Size Per Trade"
            required={true}
            variant="select"
            type="text"
          />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Account Holder Name"
              required={true}
              type="text"
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Full Beneficiary Address"
              required={true}
              type="text"
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox placeholder="Bank Name" required={true} type="text" />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Full Bank Address"
              required={true}
              type="text"
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Account Number"
              required={true}
              type="text"
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Routing Number (ABA) (if any)"
              required={true}
              type="text"
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            placeholder="Is There an Intermediary Bank?"
            required={true}
            variant="select"
            type="text"
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            placeholder="Years of experience trading digital/crypto assets"
            required={true}
            variant="select"
            type="text"
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            placeholder="Will any person other than the applicant of this account have control or manage the trading account?"
            required={true}
            variant="select"
            type="text"
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            placeholder="How did you hear about us?"
            required={true}
            type="text"
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <div style={{ marginBottom: 14 }}>
            Passport ID copy (for all nominated persons)
          </div>
          <InputBox
            placeholder="Passport ID copy (for all nominated persons)"
            required={true}
            type="file"
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <div style={{ marginBottom: 14 }}>Proof of Address</div>
          <InputBox
            placeholder="Passport ID copy (for all nominated persons)"
            required={true}
            type="file"
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <div style={{ marginBottom: 14 }}>Bank Statement</div>
          <InputBox
            placeholder="Passport ID copy (for all nominated persons)"
            required={true}
            type="file"
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <div style={{ marginBottom: 14 }}>
            Attach a photo of yourself holding your ID card close to your face
          </div>
          <InputBox
            placeholder="Passport ID copy (for all nominated persons)"
            required={true}
            type="file"
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox placeholder="Password" required={true} type="password" />
        </div>{" "}
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            placeholder="Confirm Password"
            required={true}
            type="password"
          />
        </div>
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          style={{
            marginTop: 40,
            width: 250,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          className="button"
        >
          Register
        </Link>
      </form>
    </>
  );
}
