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

let attributeNames = [
    'str',
    'dex',
    'con',
    'int',
    'wis',
    'char'
]

/* ROLL FUNCTIONALITY */
const rollDice = () => {
    return roll = Math.ceil(Math.random() * 6)
}

/* INDIVIDUAL ATTR ROLL FUNCTIONALITY */
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

const rollConstitution = () => {
    let rolls = Array.from(conRolls)
    rolls.forEach((el, i) => {
        el.append(rollDice())
    })
    conBtn.setAttribute('disabled', '')
}

const rollIntelligence = () => {
    let rolls = Array.from(intRolls)
    rolls.forEach((el, i) => {
        el.append(rollDice())
    })
    intBtn.setAttribute('disabled', '')
}

const rollWisdom = () => {
    let rolls = Array.from(wisRolls)
    rolls.forEach((el, i) => {
        el.append(rollDice())
    })
    wisBtn.setAttribute('disabled', '')
}

const rollCharisma = () => {
    // roll for each round, disable btn
    let rolls = Array.from(charRolls)
    rolls.forEach((x, i) => {
        x.append(rollDice())
    })
    charBtn.setAttribute('disabled', '')
    
    // ** add to all attr **
    // calculate total, drops lowest roll
    let arr = totalRoll(rolls)
    let indexToDrop = dropLowest(arr)

    // new array with lowest roll dropped    
    let subtotal = arr.splice(indexToDrop, 1)
    // console.log(arr)

    // add total, update the DOM
    let total = attrRollTotal(arr)
    console.log(total)
}

/* ATTR BUTTON CLICK EVENT LISTENER */
strBtn.addEventListener('click', rollStrength)
dexBtn.addEventListener('click', rollDexterity)
conBtn.addEventListener('click', rollConstitution)
intBtn.addEventListener('click', rollIntelligence)
wisBtn.addEventListener('click', rollWisdom)
charBtn.addEventListener('click', rollCharisma)

/* ATTR ROLL TOTAL FUNCTIONALITY */
const totalRoll = (rolls) => {
    let rollResult = []
    rolls.forEach((x, i) => {
        rollResult.push(Number(rolls[i].lastChild.data))
    })
    return rollResult
}

/* DROP THE LOWEST ROLL */
const dropLowest = (rollResult) => {
    let lowest = Math.min(...rollResult)
    return rollResult.indexOf(lowest)
}

/* ADD REMAINING 3 ROLLS */
const attrRollTotal = (arr) => {
    return arr.reduce((a, b) => a + b, 0)
}