                           // Creating a Ninja Class                 
class Ninja {

// created an object constructor method to construct objects.
// gave them following attributes                                                                                
    constructor(name,health=10,speed=3,strength=3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName(){
        // should print ninjas name to console
        // use backtick below tilda not qotes
        console.log(`my name is ${this.name}`);
        return this;
    }
    showStats(){
        // should display name strenth health and speed attributes
        // string interpolation with the back ticks
        console.log(`name: ${this.name}`)
        console.log(`strength: ${this.strength}`)
        console.log(`health: ${this.health}`)
         // could also use normal concatination with comma 
        console.log("speed:", this.speed)  
    }
    drinkSake(){
        // make sure the ninja this is drinking the sake and gaining health.
        console.log(`${this.name} drank sake` )
        this.health += 10;
        return this
    }
}
// creating instances or objects of the Ninja class.
// createing new objects
const ninja1 = new Ninja("Hyabusa");
// instance calling the method that the object is making.
ninja1.sayName();
// calling showStats function for it to perform its action
ninja1.showStats();
// return this below method to chain to this.
ninja1.drinkSake().drinkSake().drinkSake().drinkSake().drinkSake().drinkSake().drinkSake().drinkSake().drinkSake();
// check health after drinking Sake
console.log(ninja1.health)



// Inheritance and super()

class Sensei extends Ninja {
    constructor(name){
        super(name,200,10,10)
        this.wisdom = 10;
    }
    speakWisdom = () => { 
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        this.drinkSake()
    }
    showStatsS = () => {
        console.log(`name: ${this.name}`)
        console.log(`strength: ${this.strength}`)
        console.log(`health: ${this.health}`)
         // could also use normal concatination with comma 
        console.log("speed:", this.speed)  
        console.log("wisdom:", this.wisdom)
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStatsS();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
