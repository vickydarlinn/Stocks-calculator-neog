"use stict";
const initialStocksPriceInitial = document.querySelector(".initialstocksprice");
const quantityOfStocksInitial = document.querySelector(".quantityofstocks");
const currentStocksPriceInitial = document.querySelector(".currentstocksprice");

const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
btn.addEventListener("click", function () {
  const initialStocksPrice = Number(initialStocksPriceInitial.value);
  const quantityOfStocks = Number(quantityOfStocksInitial.value);
  const currentStocksPrice = Number(currentStocksPriceInitial.value);
  if (
    initialStocksPrice <= 0 ||
    quantityOfStocks <= 0 ||
    currentStocksPrice <= 0
  ) {
    output.style.backgroundColor = "#696969";
    output.style.textAlign = "center";
    output.textContent = "Please put proper values 😔 ";
  } else {
    let buy = initialStocksPrice * quantityOfStocks;
    let sell = currentStocksPrice * quantityOfStocks;
    let pl = sell - buy;
    if (pl === 0) {
      output.textContent = "No profit no loss 😑 ";
    } else if (pl > 0) {
      output.textContent = `wowww...You are in profit of ${(
        (pl / buy) *
        100
      ).toFixed(2)}% which is ${pl}Rs. It's party🎉 time...paytm me ${
        pl / 4
      }Rs. on my number 7015094***.`;
      output.style.backgroundColor = "#228B22";
    } else {
      output.textContent = `You are in loss of ${(-(pl / buy) * 100).toFixed(
        2
      )}% which is ${-pl}Rs.😥`;
      output.style.backgroundColor = "#DC143C";
    }
  }
  currentStocksPriceInitial.value = "";
  quantityOfStocksInitial.value = "";
  initialStocksPriceInitial.value = "";
});
