import inquirer from "inquirer";
import question from "./something/questions.js";
import PetStats from "./something/petStats.js";
let pet;
const init = () => {
    inquirer
        .prompt(question)
        .then ((answers) => {
            pet = new PetStats (answers.petType, answers.petName);
        })
        .then (() => animal())
} 
const animal = () => {
    console.log("Hello");
    
    inquirer
            .prompt([
                {
                    type: "rawlist",
                    name: "action",
                    message: "Would you like to eat, drink, fun, send you pet to the toilet or check your pet stats?",
                    choices: ["Feed", "Hydrate", "Play", "Relief", "Stats"],
                },
            ])
            .then((answers) => {
                if (answers.action === "Feed") {
                    pet.eat();
                    console.log(`${pet.name} is eating`)
                    console.log("pet hunger", pet.hunger)
                }
                else if (answers.action === "Hydrate") {
                    pet.drink();
                    console.log(`${pet.name} is driking`)
                }
                else if (answers.action === "Play") {
                    pet.fun();
                    console.log(`${pet.name} is playing`)
                }
                else if (answers.action === "Relief"){
                    pet.reliefs();
                    console.log(`${pet.name} just used the potty`)
                }
                else if (answers.action === "Stats") {
                    console.table(pet)
                }
            })
            .then(() => animal())
}
init();





// class Dog extends Animal{
//     constructor(name, age){
//         super(name, age)
//     }
//     sit = 0;
//     stand = 0;
//     roll = 0;
//     sits(){
//         pet.sit++;
//     }
//     stands(){
//         pet.stand++;
//     }
//     rolls(){
//         pet.roll++;
//     }
// }
// class Cat extends Animal{
//     constructor(name, age){
//         super(name, age);
//     }
//     energy = 10; 
//     sleeps(){
//         pet.energy++;                        //whey fun increases laziness decreases and vice versa
//         pet.thirst--;
//         pet.hunger--;
//     }
// }
// class Rabbit extends Animal{
//     constructor(name, age){
//         super(name, age),
//         pet.hops = 0
//     }
//     hopCounter(){
//         pet.hops++;                            
//     }
// }
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