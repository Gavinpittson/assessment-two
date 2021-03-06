///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

 const summedPrice = cart.reduce((a, c) => a + c.price, 0)
//console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => (cartTotal * (tax + 1)) - couponValue

console.log(calcFinalPrice(1000, 100, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    I would include 4 different properties, including: The Customer name ( name: 'name'), the total cost of meal (total : #), the meal ordered (meal: 'meal'), and if they have any allergies ( allergies: boolean). When looking at a customer, obvious information needed 
    would be name, food, and total while it should be also important to make sure your customer doesnt have any allergies!

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE



let customer1 = {
    name: 'Gavin',
    total: 10.55,
    meal: 'Sandwich Meal',
    allergies: true
}

class Customer {
    constructor(name, total, meal){
        this.name = name;
        this.total = total;
        this.meal = meal;
    
    }

    allergy(){
        this.allergies = true
    }
}

let newCustomer1 = new Customer('Gavin', 10.55, "Sandwich Meal")
newCustomer1.allergy()
console.log(newCustomer1)