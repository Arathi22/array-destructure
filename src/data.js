// const animals = [
//   //{},
//   // { sound: "meow" },
//   { name: "cat", sound: "meow" },
//   { name: "dog", sound: "woof" }
// ];

//nested object
// const animals = [
//   {
//     name: "cat", sound: "meow", feedingRequirements: {//nested object. an object inside another object
//       water: 3,
//       food: 2
//     }
//   },
//   { name: "dog", sound: "woof" }
// ];

const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirements: {
      water: 3,
      food: 2
    }
  },
  { name: "dog", sound: "woof" }
];

function useAnimals(animal) {
  return [//this array have 2 values.
    animal.name,//one is string that is name
    function () {// another is function
      console.log(animal.sound);
    }
  ];
}

export { useAnimals };

export default animals;