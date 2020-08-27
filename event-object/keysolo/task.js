class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
  	let guessSymbol = this.currentSymbol.innerHTML;
  	// let enteredSymbol = KeyboardEvent.keyCode;
  	console.log(guessSymbol);
  	// console.log(enteredSymbol);
  	// console.log(event.keyCode);
  	// let enteredSymbol = document.addEventListener('keydown', updatePlayer);
 //  	function updatePlayer(event) {
 //  		// KeyboardEvent.key;
 //  		// let enteredSymbol = event.key;
	// 	// console.log(enteredSymbol);
	// 	// if (guessSymbol === enteredSymbol) {
	// 	// 	this.success;
	// 	// } else {
	// 	// 	this.fail;
	// 	// };
	// 	return event.key;
	// };
	// let enteredSymbol = String(
	
	document.addEventListener('keydown', event => {
		const keyName = event.key;
		if (guessSymbol === keyName) {
			this.success;
		} else {
			this.fail;
		};
	});	
	// let enteredSymbol = String.fromCharCode(e);
	// enteredSymbol.toLowerCase();
	// console.log(e);
	// console.log(guessSymbol);
	// if (guessSymbol === e) {
	// 	this.success;
	// } else {
	// 	this.fail;
	// };
	
	// updatePlayer();
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

