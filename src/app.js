/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function generateRandomCard() {
  let generateSuit = function generateSuit() {
    const suits = [
      "bi bi-suit-heart-fill",
      "bi bi-suit-diamond-fill",
      "bi bi-suit-club-fill",
      "bi bi-suit-spade-fill"
    ];

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];

    const suitElement = document.getElementsByClassName("icon");

    suitElement.classList.add(iconClasses[randomSuit]);
  };

  let generateCardNumber = function generateCardNumber() {
    const cardNumbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    const randomCardNumber =
      cardNumbers[Math.floor(Math.random() * cardNumbers.length)];

    document.getElementsByClassName("number").textContent = randomCardNumber;
  };
};
