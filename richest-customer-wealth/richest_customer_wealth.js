function richestCustomerWealth(accounts) {
  //create variable highestTotal to track the richest wealth
  let highestTotal = 0
  //loop through each customer in the accounts list to determine their total wealth
  for (i = 0; i < accounts.length; i++) {
    //set customer variable to equal the current customer in the loop.
    let customer = accounts[i]
    //set that customer's total wealth to equal 0 at the start of the iteration
    let totalWealth = 0
    //loop through the current customers account values to add to that customer's total wealth
    for (n = 0; n < customer.length; n++) {
      //add the current accounts value to the customer's totalWealth variable
      totalWealth += customer[n]
    }
    //use an if statement to save the totalWealth variable to highestTotal if it is greater than the previous amount
    if (totalWealth > highestTotal) {
      highestTotal = totalWealth
    }
  }
  return highestTotal
}

console.log(
  richestCustomerWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
)

console.log(
  richestCustomerWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
)

console.log(
  richestCustomerWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
)
