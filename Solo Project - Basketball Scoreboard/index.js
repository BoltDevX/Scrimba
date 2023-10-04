let scoreHome = 0
let scoreGuest = 0
let scoreStore = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")

function increaseScoreOne() {
    scoreHome += 1
    scoreStore.textContent = scoreHome
}

function increaseScoreTwo() {
    scoreHome += 2
    scoreStore.textContent = scoreHome
}

function increaseScoreThree() {
    scoreHome += 3
    scoreStore.textContent = scoreHome
}

function increaseGuestOne() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

function increaseGuestTwo() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function increaseGuestThree() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
    
}