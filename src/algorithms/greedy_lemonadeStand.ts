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

export function lemodaneStand(bills: number[]) {
  let five = 0;
  let ten = 0;
  for (const bill of bills) {
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      if (five <= 0) return false;
      five--;
      ten++;
    } else {
      if (five > 0 && ten > 0) {
        five--;
        ten--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
}
// lesson learned.
// Focus on the core operation.
// Give 5 back if you receive 10, give 15 back if you receive 20
// You only need 5 and 10s bills
// if you make through all the customers then return true else false
/*
 function lemonadeChange(bills: number[]): boolean {
  let fiveDollarBills = 0;
  let tenDollarBills = 0;
  for (let i = 0; i < bills.length; i++) {
    const customerBill = bills[i];
    if (customerBill === 5) {
      fiveDollarBills += 1;
    } else if (customerBill === 10) {
      if (fiveDollarBills > 0) {
        fiveDollarBills -= 1;
        tenDollarBills += 1;
      } else {
        return false;
      }
    } else {
      if (fiveDollarBills > 0 && tenDollarBills > 0) {
        fiveDollarBills -= 1;
        tenDollarBills -= 1;
      } else if (fiveDollarBills >= 3) {
        fiveDollarBills -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
}
 * */
