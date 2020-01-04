'use strict'
import Deck from './_deck';
import {UI} from './_UI';
import {GamePlay} from './_gamePlay';

const deck = new Deck();
const gameUI = new UI();
const gamePlay = new GamePlay();

gamePlay.setDeck(deck.shuffle());
gamePlay.setUI(gameUI);
gamePlay.startGame();


document.querySelector('.deck').addEventListener('click', function(e){
    e.preventDefault();
    gamePlay.turn(e.target.getAttribute('id'));
})

document.querySelector('.restart').addEventListener('click', function(e){
    e.preventDefault()
    gamePlay.setDeck(deck.shuffle());
    gamePlay.setUI(gameUI);
    gamePlay.startGame();
})


