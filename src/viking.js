// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health,
        this.strength = strength
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}


// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super (health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
            if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
            }
            if (this.health <= 0) {
            return `${this.name} has died in act of combat`
            }  
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength)
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
            if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
            }
            if (this.health <= 0) {
            return `A Saxon has died in combat`
            }  
        }
}



// War
class War {
    constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let result = randomSaxon.receiveDamage(randomViking.strength);
        this.saxonArmy.forEach(( index) => {  
            if (randomSaxon.health <= 0){
                this.saxonArmy.splice(index, 1);
            }   
        })
        return result;
    }
    saxonAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let result = randomViking.receiveDamage(randomSaxon.strength);
        this.vikingArmy.forEach(( index) => {  
            if (randomViking.health <= 0){
                this.vikingArmy.splice(index, 1);
            }   
        })
        return result;
    }
    
    showStatus() {
       if (this.saxonArmy.length == 0) {
            return `Vikings have won the war of the century!`;
       }
       else if (this.vikingArmy.length == 0) {
           return `Saxons have fought for their lives and survived another day...`;
       }
       else {
           return `Vikings and Saxons are still in the thick of battle.`
       }
    }
}
