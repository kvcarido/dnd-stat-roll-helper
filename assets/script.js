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

const strTotal = document.querySelector('#strTotal')
const dexTotal = document.querySelector('#dexTotal')
const conTotal = document.querySelector('#conTotal')
const intTotal = document.querySelector('#intTotal')
const wisTotal = document.querySelector('#wisTotal')
const charTotal = document.querySelector('#charTotal')

let attributeNames = [
    'str',
    'dex',
    'con',
    'int',
    'wis',
    'char'
]

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

    // calculate total, drops lowest roll
    let arr = totalRoll(rolls)
    let indexToDrop = dropLowest(arr)
    
    // new array with lowest roll dropped    
    let subtotal = arr.splice(indexToDrop, 1)

    // find DOM element with the lowest roll, update style
    rolls[indexToDrop].classList.add('dropped-roll')

    
    // add total, update the DOM
    let total = attrRollTotal(arr)
    strTotal.append(total)
}

const rollDexterity = () => {
    let rolls = Array.from(dexRolls)
    rolls.forEach((el, i) => {
        el.append(rollDice())
    })
    dexBtn.setAttribute('disabled', '')

    // calculate total, drops lowest roll
    let arr = totalRoll(rolls)
    let indexToDrop = dropLowest(arr)
    
    // new array with lowest roll dropped    
    let subtotal = arr.splice(indexToDrop, 1)

    // find DOM element with the lowest roll, update style
    rolls[indexToDrop].classList.add('dropped-roll')

    
    // add total, update the DOM
    let total = attrRollTotal(arr)
    dexTotal.append(total)
}

const rollConstitution = () => {
    let rolls = Array.from(conRolls)
    rolls.forEach((el, i) => {
        el.append(rollDice())
    })
    conBtn.setAttribute('disabled', '')

    // calculate total, drops lowest roll
    let arr = totalRoll(rolls)
    let indexToDrop = dropLowest(arr)
    
    // new array with lowest roll dropped    
    let subtotal = arr.splice(indexToDrop, 1)

    // find DOM element with the lowest roll, update style
    rolls[indexToDrop].classList.add('dropped-roll')

    
    // add total, update the DOM
    let total = attrRollTotal(arr)
    conTotal.append(total)
}

const rollIntelligence = () => {
    let rolls = Array.from(intRolls)
    rolls.forEach((el, i) => {
        el.append(rollDice())
    })
    intBtn.setAttribute('disabled', '')

    // calculate total, drops lowest roll
    let arr = totalRoll(rolls)
    let indexToDrop = dropLowest(arr)
    
    // new array with lowest roll dropped    
    let subtotal = arr.splice(indexToDrop, 1)

    // find DOM element with the lowest roll, update style
    rolls[indexToDrop].classList.add('dropped-roll')

    
    // add total, update the DOM
    let total = attrRollTotal(arr)
    intTotal.append(total)
}

const rollWisdom = () => {
    let rolls = Array.from(wisRolls)
    rolls.forEach((el, i) => {
        el.append(rollDice())
    })
    wisBtn.setAttribute('disabled', '')
    
    // calculate total, drops lowest roll
    let arr = totalRoll(rolls)
    let indexToDrop = dropLowest(arr)
    
    // new array with lowest roll dropped    
    let subtotal = arr.splice(indexToDrop, 1)

    // find DOM element with the lowest roll, update style
    rolls[indexToDrop].classList.add('dropped-roll')

    
    // add total, update the DOM
    let total = attrRollTotal(arr)
    wisTotal.append(total)
}

const rollCharisma = () => {
    // roll for each round, disable btn
    let rolls = Array.from(charRolls)
    rolls.forEach((x, i) => {
        x.append(rollDice())
    })
    charBtn.setAttribute('disabled', '')
    
    /*******************/
    /* ADD TO ALL ATTR */

    // calculate total, drops lowest roll
    let arr = totalRoll(rolls)
    let indexToDrop = dropLowest(arr)
    
    // new array with lowest roll dropped    
    let subtotal = arr.splice(indexToDrop, 1)

    // find DOM element with the lowest roll, update style
    rolls[indexToDrop].classList.add('dropped-roll')

    
    // add total, update the DOM
    let total = attrRollTotal(arr)
    charTotal.append(total)

    /*******************/
}

/* ATTR BUTTON CLICK EVENT LISTENER */
strBtn.addEventListener('click', rollStrength)
dexBtn.addEventListener('click', rollDexterity)
conBtn.addEventListener('click', rollConstitution)
intBtn.addEventListener('click', rollIntelligence)
wisBtn.addEventListener('click', rollWisdom)
charBtn.addEventListener('click', rollCharisma)