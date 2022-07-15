// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
// getTotalCost( ) method. 


class kioskCalc {
    constructor(fruit, quantity) {
        this.fruit = fruit
        this.quantity = quantity
        this.fruitPriceList = { "orange": 50, "mango": 50, "melon": 70 }
        this.culculateTotalCost = function () {
            return `${quantity} ${fruit} for KES ${quantity * this.fruitPriceList.mango}`;
        }

    }

}
var freshFruits = new kioskCalc("mangoes", 7)

console.log(freshFruits.culculateTotalCost());