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
            this.deck[id].faceUp = true;
            this.firstCard = id;
            this.moveCount++;
            this.flipCount++;
            console.log(this.deck)
            if (this.flipCount > 2){
                return false;
            } else if (this.flipCount < 2){
                this.gameUI.faceUp(id);
                this.secCard = id;
            } else if (this.flipCount === 2){
                this.gameUI.faceUp(id);
                this.checkForMatch();
            }
        }
    }

    checkForMatch(){
        if (this.deck[this.firstCard].icon == this.deck[this.secCard].icon && this.deck[this.firstCard].matched == this.deck[this.secCard].matched){
            this.matchCount++;
            this.flipCount = 0;
            this.deck[this.firstCard].matched = true;
            this.deck[this.firstCard].matched = true;
        }  else{
            this.flipCount = 0;
            this.deck[this.firstCard].faceUp = false;
            this.deck[this.secCard].faceUp = false;
            setTimeout(()=>{
                this.gameUI.faceDown(this.firstCard);
                this.gameUI.faceDown(this.secCard); 
            },400) 
            
            
        }
    }

}