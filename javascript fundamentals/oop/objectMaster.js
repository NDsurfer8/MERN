const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    // object.freeze creates the pokemon immutable to u must create a copy
    // keys: id,name,types
// array of objects above
    const bListPkmn = pokemon.filter( p => p.name[0] === "B" );
    console.log(bListPkmn)

    const pkmnIds = pokemon.map( p => p.id )
    console.log(pkmnIds)

    // assignment follows
//     an array of pokémon objects where the id is evenly divisible by 3
    const pkmnId3 = pokemon.filter(p => p.id % 3 === 0)
    console.log(pkmnId3)

    var arr = [];
    for(let i=0; i<pokemon.length; i++){
        if(pokemon[i].id % 3 === 0){
            arr.push(pokemon[i])
        }
    }
console.log(arr)



// now do in functional programming
// filter & Map
// .filter requires a callback function
// pokemon is the variable being filtered so use dot notation.
// poke can be anything. !!! parameters are variables that we get to call it whatever we want!!!
// true or fals outcome in .filter
const arr1 = pokemon.filter( (poke) => poke.id % 3 ===0 )
console.log(arr1)



// an array of pokémon objects that are "fire" type

// an array of pokémon objects that have more than one type

const arr2 = pokemon.filter((poke) => poke.types.length > 1)
console.log(arr2)

// an array with just the names of the pokémon

// an array with just the names of pokémon with an id greater than 99
// WHich function do yo use first . filter or .map?  .filter
// !! here is good  mix filter and map!!
const arr5 = pokemon.filter((poke) => poke.id > 99).map((poke)=> poke.name)
console.log(arr5)
// an array with just the names of the pokémon whose only type is poison

const arrName = pokemon.map((poke) => poke.name )
console.log(arrName)

// an array containing just the first type of all the pokémon whose second type is "flying"

// a count of the number of pokémon that are "normal" type
