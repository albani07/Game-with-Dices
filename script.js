document.querySelector('.player');
document.querySelector('.player--0');
document.querySelector('.player--active');
document.querySelector('.name');
document.getElementById('name--0');
document.querySelector('.score');
const scoreEl0 = document.getElementById('score--0');
document.querySelector('.current');
document.querySelector('.current-label');
document.querySelector('.current-score');
document.querySelector('.player');
document.querySelector('.player--1');
document.getElementById('name--1');
const scoreEl1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
document.querySelector('.btn');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0,0]
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function(){
	const dice = Math.trunc(Math.random() * 6 + 1);
	 diceEl.classList.remove('hidden');
	 diceEl.src = `dice-${dice}.png`;

	 if (dice !== 1){
		currentScore += dice;
		document.getElementById(`current--${activePlayer}`).textContent = currentScore;
	 }else{
		activePlayer = activePlayer === 0 ? 1 : 0;

	 }
})
