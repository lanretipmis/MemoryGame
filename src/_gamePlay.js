export class GamePlay{
    constructor (){
        this.deck = null; 
        this.gameDeck = [];
        this.gameUI = null; 
        this.moveCount = 0;
        this.flipCount = 0;
        this.matchCount = 0; 
        this.firstCard = undefined;
        this.secCard = undefined;
        this.deckFragment = null;
        this.isTurnInProgress = false; 
        this.wait = ms => new Promise((r, j) => setTimeout(r, ms));
    }

    setDeck(deck){
        this.deck = deck;
    }

    setUI (ui){
        this.gameUI = ui;
    }

    startGame (){
        this.moveCount = 0;
        this.flipCount = 0;
        this.matchCount = 0;
        this.firstCard = undefined;
        this.gameDeck = this.deck;
        this.gameUI.showDeck(this.gameDeck);
        this.gameUI.updateMoveCount(this.moveCount);
    }

    isIconMatched (cardDeck, firstCardIndex, secondCardIndex){
        if (cardDeck[firstCardIndex].icon === cardDeck[secondCardIndex].icon){
            return true;
        }   else {
            return false;
        }
    }

    turn (selectedCard){
        if (selectedCard == null){
            return false
        } 
        if (this.firstCard == selectedCard){
            return false;
        }
        if (this.gameUI.isCardMatched(selectedCard)){
            return false;
        }
        if (this.flipCount > 1){
            return false;
        }

        this.gameUI.faceUp(selectedCard);
        this.flipCount += 1;
        if (this.flipCount === 1){
            this.firstCard = selectedCard;
        } else {
            this.moveCount += 1;
            this.gameUI.updateMoveCount(this.moveCount);
            if (!this.isIconMatched(this.gameDeck, this.firstCard, selectedCard)){
                this.pairNotMatched(this.firstCard, selectedCard)
            } else {
                this.pairMatched(this.firstCard, selectedCard)
            }
        }

        if (this.matchCount >= 8){
            this.gameUI.gameOverScreen();
            this.gameUI.stopTimer();
            return true;
        } 

        return false;
    }

    pairMatched(firstCard, secCard){
        this.gameUI.markMatched(this.firstCard, secCard);
        this.matchCount += 1;
        this.firstCard = undefined;
        this.flipCount = 0;
    }

    async pairNotMatched(firstCard, secCard){
        await  this.wait(1000);
        this.gameUI.faceDown(firstCard);
        this.gameUI.faceDown(secCard);
        this.firstCard = undefined;
        this.flipCount = 0;
    }

}