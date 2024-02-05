
//Business Logic
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

// Everything above here is working

//UI Logic
//UI Logic
function handleForm(event) {
    event.preventDefault();

    //displays hidden class for user selection
    document.querySelector("div#order").removeAttribute("class");
    const userToppings = document.querySelectorAll("input[name=pizzaTopping]:checked");
    const toppingsArray = Array.from(userToppings, topping => topping.value);
    const userSize = document.querySelector("input[name=pizzaSize]:checked").value;
    let newPizza = new Pizza(userSize, toppingsArray);

    //prints user toppings
    toppingsArray.forEach(function(topping) {
        const ulist = document.createElement("ul");
        ulist.append(topping);
        document.querySelector("div#order").append(ulist);
    });

    //Print size
    const sizeList = document.createElement("ul");
    sizeList.append("Size: ")
    sizeList.append(userSize);
    document.querySelector("div#order").append(sizeList);


    //get and print cost
    let cost = newPizza.getCost();
    document.getElementById('spanPrice').textContent = cost;
}

window.addEventListener("load", function() {
    document.querySelector("form#pizzaOptions").addEventListener("submit", handleForm);
    document.getElementById('clearOrders').addEventListener('click', function() {
        // Clear the pizza orders
        document.querySelector("div#order").classList.add("hidden");
        document.getElementById('spanPrice').textContent = '';
        const ulElements = document.querySelectorAll('ul');
        ulElements.forEach(function(ul) {
            ul.remove();
        });
    });
});