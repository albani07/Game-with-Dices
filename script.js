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
document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
document.querySelector('.btn');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function(){
	const dice = Math.trunc(Math.random() * 6 + 1);
	 diceEl.classList.remove('hidden');
	 diceEl.src = `dice-${dice}.png` 
})
