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
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
btn.addEventListener("click", function () {
  if (
    initialStocksPrice <= 0 ||
    quantityOfStocks <= 0 ||
    currentStocksPrice <= 0
  ) {
    output.style.backgroundColor = "black";
    output.style.textAlign = "center";
    output.textContent = "Please put proper values 😔 ";
  } else {
    let buy = initialStocksPrice * quantityOfStocks;
    let sell = currentStocksPrice * quantityOfStocks;
    let pl = sell - buy;
    if (pl === 0) {
      output.textContent = "No profit no loss 😑 ";
    } else if (pl > 0) {
      output.textContent = `waow...You are in profit of ${
        (pl / buy) * 100
      }% which is ${pl}Rs. It's party🎉 time...paytm me ${pl / 4}Rs.`;
      output.style.backgroundColor = "green";
    } else {
      output.textContent = `You are in loss of ${
        -(pl / buy) * 100
      }% which is ${-pl}Rs.😥`;
      output.style.backgroundColor = "red";
    }
  }
});
