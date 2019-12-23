 export class UI{
    constructor (){
        this.gameTimer = null;
        this.gameTimerMin = 0;
        this.gameTimerSec = 0;
        this.secondsDom = 0;//DOM seconds mske
        this.minutesDom = 0;//DOM min mske 
    }

    showDeck (gameDeck){
     let output = ``;
     gameDeck.forEach((el, index) => {
         output += `<li class="card" id='${index}'>${el.icon}</i></li>`;
     });
     document.querySelector('.deck').innerHTML = output;
    }

    turnFaceDown (cardID){

    }
}