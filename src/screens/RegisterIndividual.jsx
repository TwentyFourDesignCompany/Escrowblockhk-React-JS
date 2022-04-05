import React from "react";
import { Link } from "react-router-dom";
import waveBG from "../assets/waveBg.svg";
import InputBox from "../components/InputBox";
import { useState } from "react";
import axios from "axios";
import SelectBox from "../components/SelectBox";

export default function RegisterIndividual() {
  const [form, setform] = useState({});
  const onChangeHandler = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });

    console.log("usman", form);
  };

  async function SignUp() {
    const Data = new FormData();
    console.log("Form Data", Data.getAll("usman12"));

    Data.append("name", form.name);
    Data.append("email", form.email);
    Data.append("password", form.password);
    Data.append("confirm_password", form.confirm_password);
    Data.append("proof_of_address", form.proof_of_address);
    Data.append("first_name", form.firstname);
    Data.append("pref_communication", form.preferred_communication);
    Data.append("register_date", "12/12/2021");
    Data.append("country_of_origin", form.country_of_origin);
    Data.append("mobile_number", form.mobile_number);
    Data.append("telegram", form.telegaram);
    Data.append("street_address", form.street_address);
    Data.append("city", form.city);
    Data.append("state_province_region", form.state_province_region);
    Data.append("postal_code", form.postal_code);
    Data.append("ssn", form.ssn);
    Data.append("gross_annual_income", form.gross_annual_income);
    Data.append("employment_status", form.employment_status);

    Data.append("occupation", form.occupation);
    Data.append("employer", form.employer);
    Data.append("source_of_funds", form.source_of_funds);
    Data.append("account_purpose", form.account_purpose);
    Data.append("transaction_size", form.transaction_size);
    Data.append("acount_holder_name", form.account_holder_name);
    Data.append("beneficiary_address", form.beneficiary_address);
    Data.append("bank_name", form.bank_name);
    Data.append("bank_address", form.bank_address);
    Data.append("account_number", form.account_number);
    Data.append("routing_number", form.routing_number);
    Data.append("intermediary_bank", form.intermediary_bank);
    Data.append("crypto_trading_experience", form.crypto_trading_experience);
    Data.append("if_other_person_to_control", form.if_other_person_to_control);
    Data.append("how_hear_about_us", form.how_hear_about_us);

    Data.append("photo", form.photo);
    Data.append("passport", form.passport);
    Data.append("photo", form.photo);
    Data.append("bank_statement", form.bank_statement);
    Data.append("proof_of_address", form.proof_of_address);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios
      .post(
        "http://escrowblockhk.com/backend/public/api/registerapi",
        Data,
        config
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="register__section">
        <img src={waveBG} alt="waveBG" className="register__section__img" />
        <div className="register__section__content">
          <div
            style={{ color: "#000000" }}
            className="home__section__carousel__entry__overlay__content__heading__sub"
          >
            Already Registered? <Link to="/login"> Click here to Login</Link>
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
          <InputBox
            name="name"
            placeholder="username"
            required={true}
            // value={username}
            type="text"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="firstname"
              placeholder="First Name"
              required={true}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="last_name"
              placeholder="Last Name"
              required={true}
              type="text"
              // onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="email"
            placeholder="E-mail Address"
            required={true}
            type="email"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <SelectBox
              name="preferred_communication"
              placeholder="Preferred Communication"
              option1={<option value="Telegram" />}
              option2={<option value="Email" />}
              option3={<option value="WhatsApp" />}
              required={true}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="alias"
              placeholder="Alias/Other/Former Name(s)(if any):
"
              type="text"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <SelectBox
            name="gender"
            placeholder="Gender"
            required={true}
            option1={<option value="Male" />}
            option2={<option value="Female" />}
            variant="select"
            type="text"
            onChange={onChangeHandler}
          />
        </div>
        <div
          style={{ marginTop: 8 }}
          className="register__section__forms__content__inputs__one"
        >
          <InputBox
            // value="2017/06/01"
            name="date"
            placeholder="date"
            required={true}
            type="date"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="country_of_origin"
              placeholder="Country of Origin"
              required={true}
              option1={<option value="Middle East/Africa " />}
              option2={<option value="Asia" />}
              option3={<option value="Europe" />}
              option4={<option value="South America" />}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="passport_id"
              placeholder="Your Passport or ID number"
              required={true}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="mobile_number"
              placeholder="Mobile Number"
              required={true}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="telegaram"
              placeholder="Telegram (If Any)"
              type="text"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="street_address"
            placeholder="Street Address"
            required={true}
            type="text"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="city"
              placeholder="City"
              required={true}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="country"
              placeholder="Country"
              required={true}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="state_province_region"
              placeholder="State/Province/Region"
              required={true}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="postal_code"
              placeholder="Zip or Post Code"
              required={true}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="ssn"
            placeholder="Social Security Number (if applicable):"
            type="text"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="gross_annual_income"
              placeholder="Gross Annual Income"
              required={true}
              variant="select"
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="employment_status"
              placeholder="Employment Status"
              required={true}
              variant="select"
              type="text"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="occupation"
              placeholder="Occupation"
              required={true}
              variant="select"
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="employer"
              placeholder="Name of Your Company/Employer"
              required={true}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="source_of_funds"
            placeholder="Source of Funds              "
            required={true}
            variant="select"
            type="text"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="account_purpose"
            placeholder="Please state your Purpose of Opening an Escrowblockhk account              "
            required={true}
            type="text"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="transaction_size"
            placeholder="Expected Transaction Size Per Trade"
            required={true}
            variant="select"
            type="text"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="account_holder_name"
              placeholder="Account Holder Name"
              required={true}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="beneficiary_address"
              placeholder="Full Beneficiary Address"
              required={true}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="bank_name"
              placeholder="Bank Name"
              required={true}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="bank_address"
              placeholder="Full Bank Address"
              required={true}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="account_number"
              placeholder="Account Number"
              required={true}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="routing_number"
              placeholder="Routing Number (ABA) (if any)"
              required={true}
              type="text"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="intermediary_bank"
            placeholder="Is There an Intermediary Bank?"
            required={true}
            variant="select"
            type="text"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="crypto_trading_experience"
            placeholder="Years of experience trading digital/crypto assets"
            required={true}
            variant="select"
            type="text"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="if_other_person_to_control"
            placeholder="Will any person other than the applicant of this account have control or manage the trading account?"
            required={true}
            variant="select"
            type="text"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="how_hear_about_us"
            placeholder="How did you hear about us?"
            required={true}
            type="text"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <div style={{ marginBottom: 14 }}>
            Passport ID copy (for all nominated persons)
          </div>
          <InputBox
            name="passport"
            placeholder="Passport ID copy (for all nominated persons)"
            required={true}
            type="file"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <div style={{ marginBottom: 14 }}>Proof of Address</div>
          <InputBox
            name="proof_of_address"
            placeholder="Passport ID copy (for all nominated persons)"
            required={true}
            type="file"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <div style={{ marginBottom: 14 }}>Bank Statement</div>
          <InputBox
            name="bank_statement"
            placeholder="Passport ID copy (for all nominated persons)"
            required={true}
            type="file"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <div style={{ marginBottom: 14 }}>
            Attach a photo of yourself holding your ID card close to your face
          </div>
          <InputBox
            name="photo"
            placeholder="Passport ID copy (for all nominated persons)"
            required={true}
            type="file"
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="password"
            placeholder="Password"
            required={true}
            type="password"
            onChange={onChangeHandler}
          />
        </div>{" "}
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="confirm_password"
            placeholder="Confirm Password"
            required={true}
            type="password"
            onChange={onChangeHandler}
          />
        </div>
        <button
          // onClick={() => {
          //   window.scrollTo
          //     top: 0,
          //     behavior: "smooth"
          //
          //
          onClick={SignUp}
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
        </button>
      </form>
    </>
  );
}
