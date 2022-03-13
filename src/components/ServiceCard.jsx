import React from "react";

export default function ServiceCard({ title, para }) {
  return (
    <div className="faq__section__content__card">
      <div className="faq__section__content__card__content">
        <div className="faq__section__content__card__content__heading">
          {title}
        </div>
        <div className="faq__section__content__card__content__para">{para}</div>
      </div>
    </div>
  );
}
