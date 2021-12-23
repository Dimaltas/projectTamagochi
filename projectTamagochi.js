import inquirer from "inquirer";
import question from "./something/questions.js";
import petStats from "./something/petStats.js";

const init = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "petType",
                message: "Plese choose a pet",
                choices: [
                    "Dog",
                    "Cat",
                    "Rabbit",
                ]
            },
            {
                type: "input",
                name: "petName",
                message: "What's the name of your pet?"
            }
         ])
        .then ((answers) => {
            pet = new petStats (answers.petType, answers.petName);
        })
        .then (() => Animal())
} 
const Animal = () => {
    console.log("Hello");
    inquirer
            .prompt([
                {
                    type: "rawlist",
                    name: "action",
                    message: "Would you like to feed, hydrate, play, send you pet to the toilet or check your pet stats?",
                    choices: ["Feed", "Hydrate", "Play", "Relief", "Stats"],
                },
            ])
            .then((answers) => {
                if (answers.action === "Feed") {
                    pet.feed()
                    console.log(`${pet.name} is eating`)
                }
                else if (answers.action === "Hydrate") {
                    pet.hydrate
                    console.log(`${pet.name} is driking`)
                }
                else if (answers.action === "Play") {
                    pet.play()
                    console.log(`${pet.name} is playing`)
                }
                else if (answers.action === "Relief"){
                    pet.relief
                    console.log(`${pet.name} just used the potty`)
                }
                else if (answers.action === "Check") {
                    console.table(pet)
                }
            })
            .then(() => Animal())
}
init()
class Dog extends Animal{
    constructor(name, age){
        super(name, age)
    }
    sit = 0;
    stand = 0;
    roll = 0;
    sits(){
        pet.sit++;
    }
    stands(){
        pet.stand++;
    }
    rolls(){
        pet.roll++;
    }
}
class Cat extends Animal{
    constructor(name, age){
        super(name, age);
    }
    energy = 10; 
    sleeps(){
        pet.energy++;                        //whey fun increases laziness decreases and vice versa
        pet.thirst--;
        pet.hunger--;
    }
}
class Rabbit extends Animal{
    constructor(name, age){
        super(name, age),
        pet.hops = 0
    }
    hopCounter(){
        pet.hops++;                            
    }
}
// let poo = new Rabbit("Poo",2);

// poo.eat();
// poo.hopCounter();
// console.table(poo);
// // console.table(dick);
// constructor(name, age){
//     pet.name = name,
//     pet.age = age,
//     pet.hunger = 10,                         //hunger increases when fed
//     pet.thirst = 10,                         //thirst decreases when fed and increases when drinking
//     pet.happiness = 10,                      //Happiness increases when playing, decreases when boredom is up
//     pet.boredom = 0
// }
// get names(){
//     return `${pet.name}`;
// }
// get ages(){
//     return `${pet.age}`;
// }
// eat(){
//     pet.hunger++;
//     pet.thirst--;
// }
// drink(){
//     pet.thirst++;
//     pet.hunger--;
// }
// fun(){
//     pet.thirst--;
//     pet.boredom--;
//     pet.happiness++;
// }
// bored(){
//     pet.happiness--;
//     pet.boredom++;
// }
// reliefs(){
//     pet.relief++;
//     pet.hunger--;
//     pet.thirst--;
// }