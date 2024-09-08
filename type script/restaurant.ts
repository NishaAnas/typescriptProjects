// Base class representing a meal
class Meal {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    // Method to display meal details
    displayMeal(): string {
        return `${this.name}: $${this.price}`;
    }
}

// Subclass representing Veg Meal
class VegMeal extends Meal {
    constructor(name: string, price: number) {
        super(name, price);
    }

    // Overriding the displayMeal method for veg meals
    displayMeal(): string {
        return `${this.name} (Veg): $${this.price}`;
    }
}

// Subclass representing Non-Veg Meal
class NonVegMeal extends Meal {
    constructor(name: string, price: number) {
        super(name, price);
    }

    // Overriding the displayMeal method for non-veg meals
    displayMeal(): string {
        return `${this.name} (Non-Veg): $${this.price}`;
    }
}

// Class to manage an order
class Order {
    meals: Meal[] = [];

    // Method to add a meal to the order
    addMeal(meal: Meal): void {
        this.meals.push(meal);
        console.log(`${meal.name} added to the order.`);
    }

    // Method to display the order details
    displayOrder(): void {
        console.log("\nOrder Details:");
        this.meals.forEach((meal) => {
            console.log(meal.displayMeal());
        });
    }

    // Method to calculate the total bill
    calculateBill(): number {
        let total = 0;
        this.meals.forEach((meal) => {
            total += meal.price;
        });
        return total;
    }
}

// A simple Restaurant class to manage multiple orders
class Restaurant {
    orders: Order[] = [];

    // Method to create a new order
    createOrder(): Order {
        const newOrder = new Order();
        this.orders.push(newOrder);
        return newOrder;
    }

    // Method to display all orders and their bills
    displayAllOrders(): void {
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
