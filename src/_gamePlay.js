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

    startGame (){
        this.gameUI.showDeck(this.deck);
        
    }

    turn (id){
        if (id === null){
            return false;
        } else {
            this.gameUI.faceUp(id);
            this.deck[id].faceUp = true;
            this.firstCard = id;
            this.moveCount++;
            this.flipCount++;
            
            if (this.flipCount === 2){
                this.checkForMatch();
            }
        }
    }

    checkForMatch(){
        let faceUpArr = this.deck.filter(item=>{return item.faceUp==true});
        console.log(faceUpArr);
        if (faceUpArr[0].icon === faceUpArr[1].icon){
            this.matchCount++;
        }  else{
            this.flipCount = 0;
            this.deck[this.firstCard].faceUp = false;
            // this.gameUI.faceDown(this.deck[this.firstCard]);
            // console.log(this.deck[this.deck.indexOf(item.faceUp==true)]); //короче надо как то найти вторую карточку с первой врде поучилось, но она пока то же не становится невидимой
        }
    }

}