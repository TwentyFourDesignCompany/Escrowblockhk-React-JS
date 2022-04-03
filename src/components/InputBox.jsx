import React from "react"

export default function InputBox({
  name,
  placeholder,
  type,
  variant,
  onChange,
  value
}) {
  if (variant === "select") {
    return (
      <div className="contact__container__form__input">
        <input
          list="ice-cream-flavors"
          // id="ice-cream-choice"
          name={name}
          placeholder={placeholder}
          className="contact__container__form__input__field"
          onChange={onChange}
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
    )
  } else if (variant === "textarea") {
    return (
      <div
        className="contact__container__form__input"
        style={{ marginRight: "0em" }}
      >
        <textarea
          value={value}
          type={type}
          placeholder={placeholder}
          id={placeholder}
          name={name}
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
    )
  } else {
    return (
      <div className="contact__container__form__input">
        <input
          value={value}
          type={type}
          placeholder={placeholder}
          id={placeholder}
          name={name}
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
    )
  }
}
