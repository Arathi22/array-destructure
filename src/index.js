// import React from 'react';
// import ReactDOM from 'react-dom';

// import animals, { useAnimals } from './data';

// console.log(animals);

//destructuring 
//destructuring arrays.............
// const [cat, dog] = animals;

// console.log(cat);
//when destructuring an array the destructure name should be unique.

//.................................
//after created function 
// const [cat, dog] = animals;

// // console.log(useAnimals(cat));

// const [animal, makeSound]= useAnimals(cat);

// console.log(animal);
// makeSound();

//..............................
//destructuring objects.........
// const {name, sound} = cat;

// console.log(name);
// console.log(sound);

//another way of destructuring
// const {name: catName, sound: catSound} = cat;
// //re naming the key
// console.log(catName);
// console.log(catSound);

//how we can assign a new value for a key if the key if null.
// const { name = "poopy", sound = "murrr" } = cat;
// console.log(name);
// console.log(sound);

//how to desturcture a nested object.
// const {name, sound, feedingRequirements} = cat;

// console.log(feedingRequirements);
// console.log(feedingRequirements.food);

//how to get the value of food directly.
//desturcturing feedingRequirements

// const { name, sound, feedingRequirements: { water, food } } = cat;
// console.log(food);

//how to destructure just feedingrequirements.
// const { feedingRequirements: { water, food } } = cat;
// console.log(food);

//.........................................................................

// CHALLENGE: uncomment the code below and see the car stats rendered
//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
import React from 'react';
import ReactDOM from 'react-dom';
import cars from './practice';

// console.log(cars);
const [honda, tesla] = cars;
// console.log(honda);
// console.log(model);
// console.log(coloursByPopularity);

// const {name: catName, sound: catSound} = cat;

// const { topSpeed: hondaTopSpeed, coloursByPopularity: hondaTopColour } = honda;
// const { topSpeed: teslaTopSpeed, coloursByPopularity: teslaTopColour } = tesla;

// const { topSpeed: hondaTopSpeed, coloursByPopularity: [hondaTopColour] } = honda;
// const { topSpeed: teslaTopSpeed, coloursByPopularity: [teslaTopColour] } = tesla;

const { speedStats: { topSpeed: hondaTopSpeed } } = honda;
const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;

const { coloursByPopularity: [hondaTopColour] } = honda;
const { coloursByPopularity: [teslaTopColour] } = tesla;

ReactDOM.render(
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
    </table>,
    document.getElementById("root")
);
