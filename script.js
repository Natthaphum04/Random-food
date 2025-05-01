const itemsEl = document.getElementById('random-items')
const buttonEl = document.getElementById('random-button')
const winnerBoxEl = document.getElementById('winner')
const winnerValueEl = document.getElementById('winner-value')

buttonEl.addEventListener('click', () => {
    const items = itemsEl.value.split('\n')
    const winner = items[
        Math.floor(Math.random() * items.length)
    ]

    if (winner) {
        winnerValueEl.textContent = winner
        winnerBoxEl.style.display = 'block'
    }
})