                           // Creating a Ninja Class                 
class Ninja {

// created an object constructor method to construct objects.
// gave them following attributes                                                                                
    constructor(name,health=10){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        // should print ninjas name to console
        // use backtick below tilda not qotes
        console.log(`my name is ${this.name}`);
        return this;
    }
    showStats(){
        // should display name strenth health and speed attributes
        console.log(`name: ${this.name}`)
        console.log(`health: ${this.health}`)
        console.log(`speed: ${this.speed}`)  
        console.log(`strength: ${this.strength}`)
        

    }
    drinkSake(){
        // make sure the ninja this is drinking the sake and gaining health.
        console.log(`${this.name} drank sake` )
        this.health += 10;
        console.log(this.health)
        return this

    }
}
// creating instances or objects of the Ninja class.
// createing new objects
const ninja1 = new Ninja("Hyabusa");
const ninja8 = new Ninja("dman")
console.log(ninja8)
// instance calling the method that the object is making.
ninja1.sayName();
ninja1.showStats();
// return this below method to chain to this.
ninja1.drinkSake();


console.log(ninja1.health)


