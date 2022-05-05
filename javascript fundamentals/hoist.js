console.log(hello);                                   
var hello = 'world';  
// AFTER HOISTING BY INTER
var hello;
console.log(hello);
hello= 'world';

// logs undefined, var hello hoiseted upabove console.log



// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// AFTER HOISTING BY INTER
var needle = 'haystack';
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
test();


// output magnet


// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// AFTER HOISTING BY INTER

var brendan;
brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan)
    


    

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// AFTER HOISTING BY INTER
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food);




// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// AFTER HOISTING BY INTER



// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY INTER
var genre;
function rewind(){
    genre = 'rock';
    console.log(genre);
    genre = 'r&b';
    console.log(genre);
}
console.log(genre);
genre = 'disco';
rewind()
console.log(genre);

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// AFTER HOISTING BY INTER

var dojo;
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);//settle
    dojo = "burbank";
    console.log(dojo);//burbank
}

dojo = 'san jose';
console.log(dojo);//sanjose
learn();
console.log(dojo);

//sanjose

// 8

// AFTER HOISTING BY INTER








// const rewind = () => {  
//     genre = "rock";
//     console.log(genre) ;
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);