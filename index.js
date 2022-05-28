document.getElementById("calcButton").addEventListener("click", calcTokenAmountPriceBTC());


//document.getElementById("calcButton").onclick = calcTokenAmountPriceBTC();


function calcTokenAmountPriceBTC() { 
  var token_amount = document.getElementById("tokenAmount")
  //console.log(token_amount)
  const tokenPrice = 0.25
  var USDPrice = token_amount.value * tokenPrice
  console.log(USDPrice)
  var tokenAmountPriceBTC = USDPrice / 30000  
  console.log(tokenAmountPriceBTC) 
  document.getElementById("tokenAmountInUSD").innerHTML = USDPrice;
  document.getElementById("tokenAmountInBTC").innerHTML = tokenAmountPriceBTC; 
}
