const rollBtn = document.querySelector('#roll')
const strRolls = document.querySelectorAll('.strRoll')

const rollDice = () => {
    return Math.ceil(Math.random() * 6)
    // console.log(Math.ceil(Math.random() * 6))
}

rollBtn.addEventListener('click', rollDice)

const rollStrength = () => {
    let test = Array.from(strRolls)
    test.forEach((el, i) => {
        el.append(rollDice())
    })

}

rollStrength()