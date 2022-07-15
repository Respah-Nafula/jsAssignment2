// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 

function kiosk(quantity,fruit,price){
    let totalPrice=quantity*price    
    return `${quantity},${fruit} for ksh ${totalPrice}`
}
console.log(sentence(8,"Bananas",50))