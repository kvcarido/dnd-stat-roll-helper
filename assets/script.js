const rollAllBtn = document.querySelector('#roll')

const strBtn = document.querySelector('#strBtn')
const dexBtn = document.querySelector('#dexBtn')
const conBtn = document.querySelector('#conBtn')
const intBtn = document.querySelector('#intBtn')
const wisBtn = document.querySelector('#wisBtn')
const charBtn = document.querySelector('#charBtn')

const strRolls = document.querySelectorAll('.strRoll')
const dexRolls = document.querySelectorAll('.dexRoll')
const conRolls = document.querySelectorAll('.conRoll')
const intRolls = document.querySelectorAll('.intRoll')
const wisRolls = document.querySelectorAll('.wisRoll')
const charRolls = document.querySelectorAll('.charRoll')

class StatRollHelper {
    constructor() {
        this.attributeNames = [
            'str',
            'dex',
            'con',
            'int',
            'wis',
            'char'
        ]
    }

    rollDice() {
        return Math.ceil(Math.random() * 6)
    }

    rollAttribute(attribute) {
        let rolls = Array.from(`${attribute}Rolls`)
        rolls.forEach((li, i) => {
            li.append(this.rollDice)
        })
        `${attribute}Btn`.setAttribute('disabled', '')
    }
}

/********************************/
/* ********* INITIATE ********* */
let newRoll = new StatRollHelper()
/********************************/


const rollStrength = () => {
    let rolls = Array.from(strRolls)
    rolls.forEach((el, i) => {
        el.append(rollDice())
    })
    strBtn.setAttribute('disabled', '')
}

const rollDexterity = () => {
    let rolls = Array.from(dexRolls)
    rolls.forEach((el, i) => {
        el.append(rollDice())
    })
    dexBtn.setAttribute('disabled', '')
}

strBtn.addEventListener('click', rollStrength)
dexBtn.addEventListener('click', rollDexterity)