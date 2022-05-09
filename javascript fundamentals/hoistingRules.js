var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);


var foo;                  // 'foo' is a declaration, it's global and gets hoisted
function magic(){         // 'magic()' also gets hoisted to the top
    var foo;              // here 'foo' is declared within 'magic()' and gets hoisted to the top of it's scope
    foo = "hello world";  // we assign a value to our function scoped 'foo'
    console.log(foo);     // we log it as 'hello world'
}                       
foo = "bar";              // here, we assign a value to the global 'foo'
magic();                  // magic is called, the first console.log runs
console.log(foo);         // finally we log the global foo

// FUNCTIONS ACT LIKE A CAGE 
// PREVENTING FROM BEING HOISTED OUT OF THEM.


// STANDALONE FUNCTIONS GET HOSETED



var magicalUnicorns = () => {
    console.log("Will it blend?");
}
console.log("Don't breathe this!");
magicalUnicorns();
// 

//* Key Rules of Hoisting
// • Variable declarations (var) rise to the top of their scope like hot air balloons.

// • Functions create their own scope and act like cages, preventing declarations from rising out.

// • Assignments, or = signs, act like anchors. They stay put, no matter how the code is rearranged.

// • Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value.
//  An exception will be thrown if a variable declared with let or const is read before it is initialized.

