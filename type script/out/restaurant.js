// Base class representing a meal
class Meal {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // Method to display meal details
    displayMeal() {
        return `${this.name}: $${this.price}`;
    }
}
// Subclass representing Veg Meal
class VegMeal extends Meal {
    constructor(name, price) {
        super(name, price);
    }
    // Overriding the displayMeal method for veg meals
    displayMeal() {
        return `${this.name} (Veg): $${this.price}`;
    }
}
// Subclass representing Non-Veg Meal
class NonVegMeal extends Meal {
    constructor(name, price) {
        super(name, price);
    }
    // Overriding the displayMeal method for non-veg meals
    displayMeal() {
        return `${this.name} (Non-Veg): $${this.price}`;
    }
}
// Class to manage an order
class Order {
    constructor() {
        this.meals = [];
    }
    // Method to add a meal to the order
    addMeal(meal) {
        this.meals.push(meal);
        console.log(`${meal.name} added to the order.`);
    }
    // Method to display the order details
    displayOrder() {
        console.log("\nOrder Details:");
        this.meals.forEach((meal) => {
            console.log(meal.displayMeal());
        });
    }
    // Method to calculate the total bill
    calculateBill() {
        let total = 0;
        this.meals.forEach((meal) => {
            total += meal.price;
        });
        return total;
    }
}
// A simple Restaurant class to manage multiple orders
class Restaurant {
    constructor() {
        this.orders = [];
    }
    // Method to create a new order
    createOrder() {
        const newOrder = new Order();
        this.orders.push(newOrder);
        return newOrder;
    }
    // Method to display all orders and their bills
    displayAllOrders() {
        this.orders.forEach((order, index) => {
            console.log(`\nOrder ${index + 1}:`);
            order.displayOrder();
            console.log(`Total Bill: $${order.calculateBill()}`);
        });
    }
}
// object for restaurant
const restaurant = new Restaurant();
// Creating first order
const order1 = restaurant.createOrder();
order1.addMeal(new VegMeal('Paneer Butter Masala', 8));
order1.addMeal(new NonVegMeal('Chicken Curry', 12));
// Creating second order
const order2 = restaurant.createOrder();
order2.addMeal(new VegMeal('Veg Biryani', 7));
order2.addMeal(new NonVegMeal('Fish Fry', 15));
// Display all orders
restaurant.displayAllOrders();
//# sourceMappingURL=restaurant.js.map