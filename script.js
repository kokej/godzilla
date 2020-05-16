const coin = document.querySelector('#coin');
const button = document.querySelector('#flip');


function deferFn(callback, ms) {
  setTimeout(callback, ms);
}

function flipCoin() {
  coin.setAttribute('class', '');
  const random = Math.random();
  const result = random < 0.5 ? 'heads' : 'tails';
  deferFn(function () {
    coin.setAttribute('class', 'animate-' + result);
  }, 100);
}

button.addEventListener('click', flipCoin);
