class petStats{
    constructor(name, age){
        this.name = name,
        this.age = age,
        this.hunger = 10,                         //hunger increases when fed
        this.thirst = 10,                         //thirst decreases when fed and increases when drinking
        this.happiness = 10,                      //Happiness increases when playing, decreases when boredom is up
        this.boredom = 0
    }
    eat(){
        this.hunger++;
        this.thirst--;
    }
    drink(){
        this.thirst++;
        this.hunger--;
    }
    fun(){
        this.thirst--;
        this.boredom--;
        this.happiness++;
    }
    bored(){
        this.happiness--;
        this.boredom++;
    }
    reliefs(){
        this.relief++;
        this.hunger--;
        this.thirst--;
    }   
}
export default petStats;