/*
https://leetcode.com/problems/lemonade-change/description/
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time 
(in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. 
You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first. 
Given an integer array bills where bills[i] is the bill the ith customer pays, 
return true if you can provide every customer with the correct change, or false otherwise.

Example 1:

Input: bills = [5,5,5,10,20]
Output: true
Explanation: 
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.

- Total amount that needs to be collected  = bills.length * 5 = 25
- 2 items greater than 5.
  - first one is 10, collect 10, return 10 - 5  = 5 change. 
  - reduce 5 from bills I 
- Amount to keep from 2 items. $10.00
- 10 + 20 = 30 - 10 = $20
- Do you have 20 right now? yep
 
Example 2:

Input: bills = [5,5,10,10,20]
Output: false
Explanation: 
From the first two customers in order, we collect two $5 bills.
For the next two customers in order, we collect a $10 bill and give back a $5 bill.
For the last customer, we can not give the change of $15 back because we only have two $10 bills.
Since not every customer received the correct change, the answer is false.

- Do you have enough money in the first place?
- Do you have 5s to give the change, if the change require 5s, 
 * */
export function lemonadeStand(bills: number[]): boolean {
  const lemonadeCost = 5;
  const moneyDrawer = new Map<number, number>();
  let currTotal = 0;
  for (let i = 0; i < bills.length; i++) {
    // if the customer gives you exact lemonade cost
    const customerMoney = bills[i];
    if (customerMoney === lemonadeCost) {
      moneyDrawer.set(customerMoney, (moneyDrawer.get(customerMoney) ?? 0) + 1);
      currTotal += lemonadeCost;
    } else {
      const change = customerMoney - lemonadeCost; // customer gave you more money
      if (change > currTotal) return false; // Check if I have enough total for change
      moneyDrawer.set(customerMoney, (moneyDrawer.get(customerMoney) ?? 0) + 1);
      currTotal += lemonadeCost;
      // if the change is 5 (customer gave you 10)
      if (change === 5) {
        if ((moneyDrawer.get(5) ?? 0) >= 1) {
          moneyDrawer.set(5, (moneyDrawer.get(5) ?? 0) - 1); // reduce the bill from the drawer
        } else {
          return false;
        }
      }
      // customer gave you 20, means you return 15
      else if (change === 15) {
        // true if we have at least 5 and 10, or 5, 5, 5 else FALSE
        const threeFives = (moneyDrawer.get(5) ?? 0) >= 3;
        const oneTen = (moneyDrawer.get(10) ?? 0) >= 1;
        const oneFive = (moneyDrawer.get(5) ?? 0) >= 1;
        if (threeFives) {
          moneyDrawer.set(5, (moneyDrawer.get(5) ?? 0) - 3);
        } else if (oneTen && oneFive) {
          moneyDrawer.set(5, (moneyDrawer.get(5) ?? 0) - 1);
          moneyDrawer.set(10, (moneyDrawer.get(10) ?? 0) - 1);
        } else {
          return false;
        }
      }
    }
  }
  return true;
}
