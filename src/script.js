"use strict";
const buttonRed = document.getElementById("btn");

document.querySelector("#btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Button was clicked!");
  // alert("Button was clicked!");
  buttonRed.style.backgroundColor = "black";
  buttonRed.style.color = "white";
});
