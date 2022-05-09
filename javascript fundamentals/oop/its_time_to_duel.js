// parent class
class Card{
    constructor(name, cost){
        this.name = name;
        this. cost = cost;
    }
}


// child class
class Unit extends Card {
    // we are adding power and res to our Unit class
    constructor(name, cost, power, res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        // reduce target res by power
        target.res = target.res - this.power
        console.log("remaining res is ",target.res)
    }

}

const unitOne = new Unit("Red_BeltNinja",3,3,4)
console.log(unitOne)
const unitTwo = new Unit("Black_BeltNinja",4,5,4)
console.log(unitTwo)
unitTwo.attack(unitOne)




// child class
class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
        // implement card text here
            if(this.stat === "power"){
                target.power = target.power + this.magnitude
                console.log("newPower", target.power)
            }
            else{
                target.res = target.res + this.magnitude
                console.log("newRes", target.res)
            }
        } 
        else {
        console.log( "Target must be a unit! Error" );
        }
    }    
}


const effectOne = new Effect("Hard Algorithm", 2,"increase targets resilience by 3", "res", 3)
console.log(effectOne)
const effecttwo = new Effect("Unhandled Promise Rejection", 1,"increase targets resilience by 2", "res", -2)
console.log(effecttwo)
const effectThree = new Effect("Pair Programming", 3,"increase targets power by 2", "power", 2)
console.log(effectThree)


effecttwo.play(unitOne)
effecttwo.play(unitOne)
effecttwo.play(unitOne)
effecttwo.play(unitOne)

> typeof( "hello" );
'string'
> typeof( function() {} );
'function'




// const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
// const groceryList = groceries.map( item => `<li>${item}</li>` );
// console.log(groceryList)

// const values = [1, 2, 3, 4, 5];
// const cubes = values.map( val => val**3 );

// console.log(cubes)


const values = [1, 2, 3, 4, 5];
const evens = values.filter( (val) => val % 2 === 0 );
console.log(evens)

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );
console.log(oFoods)

const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log(oddCubes)
