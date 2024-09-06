class Car {
    name: string;
    mileage: number;
    max_speed: number;

    constructor(name: string, mileage: number, max_speed: number) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }

    displayCarDetails(): void {
        console.log(`Car Name: ${this.name}`);
        console.log(`Mileage: ${this.mileage}`);
        console.log(`Max Speed: ${this.max_speed}`);
    }
}

const car1 = new Car("Toyota", 20, 180);
car1.displayCarDetails();
