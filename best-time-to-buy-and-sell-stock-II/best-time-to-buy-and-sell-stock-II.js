function maximumProfit(prices) {
  //Initialize boughtPrice, totalProfit, and bought variables for data holding
  let boughtPrice
  let totalProfit = 0
  let bought = false
  //Iterate through the prices array
  for (let i = 0; i < prices.length; i++) {
    //If bought is false, and the next price is higher than the current, buy a stock
    if (bought === false && prices[i] < prices[i + 1]) {
      bought = true
      boughtPrice = prices[i]
    }

    //While the next price is higher continue to iterate through each price by forcing 'i' to increase
    while (prices[i] < prices[i + 1]) {
      i++
    }

    //Once the while loop is finished, if you own a stock and the current price is higher than your bought price sell it
    if (bought === true && prices[i] > boughtPrice) {
      bought = false
      totalProfit = totalProfit + (prices[i] - boughtPrice)
    }
  }
  return totalProfit
}

maximumProfit([7, 1, 5, 3, 6, 4])
maximumProfit([1, 2, 3, 4, 5])
maximumProfit([7, 6, 4, 3, 1])
