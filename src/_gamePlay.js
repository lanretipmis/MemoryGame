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
            this.deck[id].faceUp = true;
            this.firstCard = id;
            this.moveCount++;
            this.flipCount++;
            if (this.flipCount > 2){
                return false;
            } else if (this.flipCount < 2){
                this.gameUI.faceUp(id);
            } else if (this.flipCount === 2){
                this.gameUI.faceUp(id);
                console.log(this.firstCard);
                this.checkForMatch();
            }
        }
    }

    checkForMatch(){
        this.deckFragment = this.deck.filter((item, index)=>{return item.faceUp===true});
        console.log(this.deckFragment); //-------------------------
        if (this.deckFragment[0].icon == this.deckFragment[1].icon){
            this.matchCount++;
            this.flipCount = 0;
            this.deckFragment= [];
        }  else{
            this.flipCount = 0;
            this.deck[this.firstCard].faceUp = false;
            let secCard = this.deck.indexOf(item=>{return item.faceUp==true});
            this.deck[secCard].faceUp = false;
            setTimeout(()=>{
                this.gameUI.faceDown(this.firstCard);
                this.gameUI.faceDown(this.deck[secCard]); 
                console.log(this.firstCard)
                console.log(secCard)
            },1000) 
            this.deckFragment=[];

        }
    }

}