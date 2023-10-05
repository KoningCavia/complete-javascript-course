// Assignment 1: Values and Variables
const country = "the Netherlands";
const continent = "europa";
let population = 17 * (10 ** 6);
console.log("the country is: " + country + " which is situated in " + continent + " and has a population of around " + population)

// 2.1 DATATYPES
let isIsland = false;
let language = "dutch";
// country = "belbium";
console.log("isIsland is " + isIsland + ". population: " + population + ". continent : " + continent + ". language: " + language);

// LET CONST AND VAR

//BASIC OPERATORS
let halfPopulation = population / 2;
console.log(population + 1);
let popFinland = 6 * 10 ** 6;
let higherPopThanFinland = population > popFinland;
console.log(higherPopThanFinland);
let averagePopulation = 33 * 10 ** 6;
console.log(population > averagePopulation);

let description = country + " is in " + continent + ", and its " + population / 10 ** 6 + " million people speak " + language;
console.log(description);

// STRING AND TEMPLATE LITERALS
let descriptionLiteralSyntax = `${country} is in ${continent}, and its ${population / 10 ** 6} million people speak ${language}`
console.log(descriptionLiteralSyntax);

// TAKING DECISIONS: IF/ELSE STATEMENTS
if (population > averagePopulation) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${(averagePopulation - population) / 10 ** 6} million below average`);
}

// TYPE CONVERSION AND COERCION
4;
console.log('9' - '5');

617;
console.log('19' - '13' + '17');

23;
console.log('19' - '13' + 17)

false;
console.log('123' < 57);

117;
console.log(5 + 6 + '4' + 9 - 4 - 2);
1143

/*

// Equality Operators: == vs ===

numNeighbours = prompt(`How many neighbour countries does your country have?`);

if (numNeighbours == 1) {
    alert("Only 1 border!");
    console.log("only one border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border.")
} else {
    console.log("No borders..");
}

*/


// LOGICAL OPERATORS
if (
    language == "english" &&
    population < 50 * 10 ** 6 &&
    !isIsland
) {
    console.log(`you should live in ${country}`)
} else {
    console.log(`${country} does not meet your criteria`)
}

// THE SWITCH STATEMENT
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log(`Most number of native speakers`);
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// THE CONDITIONAL TERNARY OPERATOR
population > 33 * 10 ** 6 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);


// FUNCTIONS
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population / (10 ** 6)} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry('Belgie', 50, 'Zottenhaven'));
console.log(describeCountry('Drenthe', 130 * (10 ** 8), 'Orvelte'));
console.log(describeCountry('Dinoland', 8 * 10 ** 6, 'Vuursteen'));

// FUNCTION DECLARATIONS VS EXPRESSIONS

// Function declaration
function percentageOfWorld1(populationMillions) {
    return (populationMillions / 7900 * 100);
}

console.log(`declarations 1:${percentageOfWorld1(500)}, 2: ${percentageOfWorld1(1500)} , 3 ${percentageOfWorld1(6)}`)


// Function expression
const percentageOfWorld2 = function (populationMillions) {
    return (populationMillions / 7900 * 100);
}

console.log(`expression 1:${percentageOfWorld2(500)}, 2: ${percentageOfWorld2(1500)} , 3 ${percentageOfWorld2(6)}`)


// arrow function
const percentageOfWorld3 = populationMillions =>
    populationMillions / 7900 * 100;



console.log(`Arrow-functions 1:${percentageOfWorld3(500)}, 2: ${percentageOfWorld3(1500)} , 3 ${percentageOfWorld3(6)}`)

// FUNCTIONS CALLING OTHER FUNCTIONS
function describePopulation(country, population) {
    return `${country} has ${population / 10 ** 6} million people, which is about ${percentageOfWorld1(population / 10 ** 6)}% of the world`
}

console.log(describePopulation(country, population));
console.log(describePopulation('belgium', 50000));
console.log(describePopulation('Drenthe', 150000));

// INTRODUCTION TO ARRAYS
const populations = [100, 1000, 1000 * 10 ** 3, 10 * 10 ** -3];
console.log(populations.length == 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]
console.log(percentages);

// BASIC ARRAY OPERATIONS (METHODS)
let neighbours = [`Belgium`, `Germany`, `United Kingdom`]
neighbours.push(`Utopia`);
console.log(neighbours);
neighbours.pop(`Utopia`)
console.log(neighbours);

if (!neighbours.includes(`Germany`)) {
    console.log(`Probably not a central european country`)
} else {
    console.log(`Deuschland deutschland uber alles`)
}

neighbours[0] = "Flanders";
console.log(neighbours); 