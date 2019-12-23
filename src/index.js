import Deck from './_deck';
import {UI} from './_UI';
import {GamePlay} from './_gamePlay';

const deck = new Deck();
const gameUI = new UI();
const gamePlay = new GamePlay();

gamePlay.setDeck(deck.shuffle());
gamePlay.showDeck();

