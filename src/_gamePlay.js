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
        const arrOfLi = document.querySelectorAll('li');
        arrOfLi.forEach(item=>{item.addEventListener('click', this.gameUI.faceUp)});

        //теперь надо добавить функцию оюраюотки, что если в массие есть две поднятый карточки и они совпадают и сделать
        //это все через цепочтку. То есть сл функция будет в FaceUp/
    }


    

}