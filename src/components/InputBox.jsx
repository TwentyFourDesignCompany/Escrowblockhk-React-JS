import React from "react";

export default function InputBox({ placeholder, type, variant, onChange }) {
  if (variant === "select") {
    return (
      <div className="contact__container__form__input">
        <input
          list="ice-cream-flavors"
          id="ice-cream-choice"
          name="ice-cream-choice"
          placeholder={placeholder}
          className="contact__container__form__input__field"
        />

        <datalist id="ice-cream-flavors">
          <option value="Chocolate" />
          <option value="Coconut" />
          <option value="Mint" />
          <option value="Strawberry" />
          <option value="Vanilla" />
        </datalist>
        <label
          htmlFor={placeholder}
          className="contact__container__form__input__label heading"
        >
          {placeholder}
        </label>
      </div>
    );
  } else if (variant === "textarea") {
    return (
      <div
        className="contact__container__form__input"
        style={{ marginRight: "0em" }}
      >
        <textarea
          type={type}
          placeholder={placeholder}
          id={placeholder}
          name={placeholder}
          rows={5}
          className="contact__container__form__input__field"
        />
        <label
          htmlFor={placeholder}
          className="contact__container__form__input__label heading"
        >
          {placeholder}
        </label>
      </div>
    );
  } else {
    return (
      <div className="contact__container__form__input">
        <input
          type={type}
          placeholder={placeholder}
          id={placeholder}
          name={placeholder}
          className="contact__container__form__input__field"
          onChange={onChange}
        />
        <label
          htmlFor={placeholder}
          className="contact__container__form__input__label heading"
        >
          {placeholder}
        </label>
      </div>
    );
  }
}
