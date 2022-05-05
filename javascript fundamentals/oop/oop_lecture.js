//1. DEFINE CLASS
class Vehicle{
    // member Variables / Attributes
    // constructor
    constructor(manufacturer, model, color){
        this.miles = 0
        this.manufacturer = manufacturer
        this.model = model
        this.color = color
    }
    // other methods
    test(){
        console.log("test Method")
    }
    drive(amount){
        this.miles += amount
    }
    displayCarInfo = () => {
        console.log(this.manufacturer)
        console.log(this.model)
        console.log(this.color)
    }
}

// 2. instantiate an object
const myCar = new Vehicle("kia","optima","blue")
myCar.drive(20)

myCar.drive(20)
console.log(myCar)


// Inheritance

class M5 extends Vehicle{
    // member Variables
    // constructors
    constructor(manufacturer, model, color){
        super(manufacturer, model, color)
    }


    // methods
}