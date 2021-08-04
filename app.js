"use stict";
const initialStocksPrice = Number(
  document.querySelector(".initialstocksprice").value
);
const quantityOfStocks = Number(
  document.querySelector(".quantityofstocks").value
);
const currentStocksPrice = Number(
  document.querySelector(".currentstocksprice").value
);
const output = document.querySelector(".output").textContent;

console.log(output);
let bg = document.querySelector(".output_data").style.backgroundColor;
bg = "red";
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  if (
    initialStocksPrice >= 0 ||
    quantityOfStocks >= 0 ||
    currentStocksPrice >= 0
  ) {
    output = "Please inter proper value😔";
    bg = "red";
  } else {
    output = "Please inter proper value😔";
    bg = "red";
  }
});
