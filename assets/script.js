const rollBtn = document.querySelector('#roll')

const rollDice = () => {
    // return Math.ceil(Math.random() * 6)
    console.log(Math.ceil(Math.random() * 6))
}

rollBtn.addEventListener('click', rollDice)