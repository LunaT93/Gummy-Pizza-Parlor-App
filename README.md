Hello. Welcome to the gummy pizza parlor. I am going to prioritize getting this finished by noon (if I have to take time until 1 I may). So, I am going to have very limited functionality. I am going to have only a few toppings.

Toppings: Jelly cheeze, gummeronis, gelatin jalapenos, resinous banana peppers.

******************************************************************

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

function Pizza() {
    toppings: [];
    size: "";
}

const myPizza = new Pizza(["anchovies", "pineapple"], "medium");

console.log Pizza

Test 1. Didn't work.

//Question I have based on Henry's code which uses this.size = size under a function Pizza is whether things need to be initialized like this.size = size or when do they get initialized like index = []; In short the answer is that {} is an OBJECT whereas this.size = size is simply a variable. Since, given the following example, this.contacts = {} returns a constructor function, which is itself an object. Functions in Javascript ARE objects.

So, my initial function should be

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

myPizza = new Pizza("medium", ["anchovies", "olives"])

console.log(myPizza); should return medium, anchoivies, olives

RESULT: 

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

myPizza = new Pizza("medium", ["anchovies", "olives"]);
Pizza {size: 'medium', toppings: Array(2)}
console.log(myPizza)
VM530:1 Pizza {size: 'medium', toppings: Array(2)}size: "medium"toppings: (2) ['anchovies', 'olives'][[Prototype]]: Object
undefined

Perfect.

Cart. When a person submits form, you can access info via the dom. Then you can create an object from there?

JavaScript functions can sometimes get hoisted (i.e. henry's gatherUserInputs)

It's not saving a new Pizza but Henry says it's being saved to the add to cart.

Use an event listener function instead of a whole page event listener.

************************************************************************************************************************************

Test No. 2
Can I get switch/case function to correctly output different types of pizza price?

Pizza.prototype.getPrice = function() {
    let cost = 2.00;
    const size = "Reg" //default size is regular
    switch (size) {
        case ("Small"):
            cost = 1.00; // small is $1
            break;
        case ("Large"):
            cost = 3.00; // large is $3
            break;
    }
    return cost;
}

Result: Worked.


Test 3:

Combine topping cost and size:

Function

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

Pizza.prototype.getCost = function() {
    let cost = 2.00;
    const size = "reg" //default size is regular;
    switch (this.size) {
        case ("small"):
            cost = 1.00; // small is $1
            break;
        case ("large"):
            cost = 3.00; // large is $3
            break;
    } // get size cost
    cost += this.toppings.length * 0.50; // get topping cost
    return cost;
}

Should output cost.

Result: Worked.