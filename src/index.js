import Deck from './_deck';
import {UI} from './_UI';
import {GamePlay} from './_gamePlay';

const deck = new Deck();
const gameUI = new UI();
const gamePlay = new GamePlay();

console.log(deck.shuffle());

