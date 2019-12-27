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
            }
            this.gameUI.faceUp(id);
            
            if (this.flipCount === 2){
                this.checkForMatch();
            }
        }
    }

    checkForMatch(){
        let faceUpArr = this.deck.filter((item, index)=>{return item.faceUp==true});
        console.log(faceUpArr);
        if (faceUpArr[0].icon == faceUpArr[1].icon){
            this.matchCount++;
            this.flipCount = 0;
            faceUpArr = [];
        }  else{
            this.flipCount = 0;
            this.deck[this.firstCard].faceUp = false;
            let secCard = this.deck.find(item=>{return item.faceUp==true});
            secCard.faceUp = false;
            setTimeout(()=>{
                this.gameUI.faceDown(this.firstCard);
                this.gameUI.faceDown(this.deck.indexOf(secCard)); 
                console.log(this.firstCard)
                console.log(secCard)
            },1600) 
            faceUpArr = [];

        }
    }

}