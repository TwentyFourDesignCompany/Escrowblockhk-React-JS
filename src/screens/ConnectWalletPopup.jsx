import React from "react";
import metamask from "../assets/metamask.png";

function ConnectWalletCard() {
  return (
    <button className="popup__container__content__entry">
      <div className="popup__container__content__entry__card">
        <img
          src={metamask}
          alt="metamaskPic"
          className="popup__container__content__entry__card__img"
        />
      </div>
      <span>MetaMask</span>
    </button>
  );
}

export default function ConnectWalletPopup({ setIsConnectWallet }) {
  return (
    <div className="popup__container">
      <div className="popup__container__content">
        <div className="popup__container__header">
          <div className="popup__container__header__heading">
            Connect Wallet
          </div>
          <button
            onClick={() => {
              setIsConnectWallet(false);
            }}
            className="popup__container__header__close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="popup__container__content__wrapper">
          <ConnectWalletCard />
          <ConnectWalletCard />
          <ConnectWalletCard />
          <ConnectWalletCard />
          <ConnectWalletCard />
          <ConnectWalletCard />
          <ConnectWalletCard />
          <ConnectWalletCard />
          <ConnectWalletCard />
          <ConnectWalletCard />
          <ConnectWalletCard />
          <ConnectWalletCard />
        </div>
      </div>
    </div>
  );
}
