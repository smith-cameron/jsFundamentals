// const pokémon = Object.freeze([
//     { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
//     { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
//     { "id": 9,   "name": "Blastoise",  "types": ["water"] },
//     { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
//     { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
//     { "id": 23,  "name": "Ekans",      "types": ["poison"] },
//     { "id": 24,  "name": "Arbok",      "types": ["poison"] },
//     { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
//     { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
//     { "id": 52,  "name": "Meowth",     "types": ["normal"] },
//     { "id": 63,  "name": "Abra",       "types": ["psychic"] },
//     { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
//     { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
//     { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
//     { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
//     { "id": 98,  "name": "Krabby",     "types": ["water"] },
//     { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
//     { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
//     { "id": 133, "name": "Eevee",      "types": ["normal"] },
//     { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
//     { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
//     { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
//     { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
// ]);
const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
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
// Examples:
// create a list of pokémon that have names that start with the letter "B"
const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
// console.log(bListPkmn)
// return an array of just the ids
const pkmnIds = pokémon.map( p => p.id )
// console.log(`pkmnIds.length: ${pkmnIds.length}`)
// console.log(pkmnIds)

// 1
// Return an array of pokémon objects where the id is evenly divisible by 3
const by3 = pokémon.filter(p => p.id % 3 === 0)
// console.log(by3)

// 2
// Return an array of pokémon objects that are "fire" type
const fireOnly = pokémon.filter(p => p.types.includes("fire"))
// console.log(fireOnly)

// 3
// Return an array of pokémon objects that have more than one type
const typeS = pokémon.filter(p => p.types.length > 1)
// console.log(typeS)

// 4
// Return an array with just the names of the pokémon
const names = pokémon.map(p => p.name)
// console.log(names)

// 5
// Return an array with just the names of pokémon with an id greater than 99
const greaterThan99 = pokémon.filter(p => p.id > 99).map(p => p.name);
// console.log(greaterThan99)

// 6
// Return an array with just the names of the pokémon whose only type is poison
const namesBytype = pokémon.filter(p => p.types.includes("poison")).filter(p => p.types.length === 1).map(p => p.name);
// console.log(namesBytype)

// 7
// Return an array containing just the first type of all the pokémon whose second type is "flying"
const firstBySecond = pokémon.filter(p => p.types[1] === "flying").map(p => p.types[0]);
// console.log(firstBySecond)

// 8
// Return a count of the number of pokémon that are "normal" type
const countNormal = pokémon.filter(p => p.types.includes("normal"))
// console.log(countNormal.length)
// console.log(countNormal)

const countNormalReduce = pokémon.reduce((count, pokemon) => {
    if(pokemon.types.includes("normal")){
        count++
    }
    return count
}, 0);
// console.log(countNormalReduce);

//9
// Return an array with all pokemon except the pokemon with the id of 148
const filter148 = pokémon.filter(p => p.id != 148)
// console.log(filter148)

// 10
// Return an array with all pokemon and for pokemon id: 35 replacing "normal" with "fairy"
let replaceType = (pokemon) => {
        pokemon.types.pop()
        pokemon.types.push("fairy")
        return pokemon
}
const insertFairy = pokémon.map((p) => p.id == 35 ? replaceType(p) : p)
console.log(insertFairy)