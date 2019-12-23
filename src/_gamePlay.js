export class GamePlay{
    constructor (){
        this.deck = null; 
        this.gameDeck = [];
        this.gameUI = null; 
        this.moveCount = 0;
        this.flipCount = 0;
        this.matchCount = 0; 
        this.firstCard = undefined;
        this.deckFragment = null;
        this.isTurnInProgress = false; 
    }

    setDeck(deck){
        this.deck = deck;
    }

    setUI (ui){
        this.gameUI = ui;
    }

    showDeck (){
        let output = ``;
        for (let i of this.deck){
            output += ` <li class="card" id='1'>${i.icon}</i></li>`
        }

        document.querySelector('.deck').innerHTML = output;
    }


    

}