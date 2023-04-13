import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function generateRandomCard() {
  function generateSuit() {
    const suits = [
      "bi-suit-heart-fill",
      "bi-suit-diamond-fill",
      "bi-suit-club-fill",
      "bi-suit-spade-fill"
    ];

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];

    const topSuitElement = document.getElementById("top-icon");
    topSuitElement.classList.add(randomSuit);

    const bottomSuitElement = document.getElementById("bottom-icon");
    bottomSuitElement.classList.add(randomSuit);
  }

  function generateCardNumber() {
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

    document.getElementById("number").textContent = randomCardNumber;
  }

  generateSuit();
  generateCardNumber();
};
