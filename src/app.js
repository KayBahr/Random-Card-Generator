/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function generateRandomCard() {};
let generateSuit = function generateSuit() {
  const suits = ["hearts", "diamonds", "clubs", "spades"];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  const suitElement = document.getElementsByClassName("icon");

  suitElement.classList.add(iconClasses[randomSuit]);
};

let generateCardNumber = function generateCardNumber() {};
