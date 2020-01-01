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
         output += `<li class="card hide-card" id='${index}'>${el.icon}</li>`;
     });
     document.querySelector('.deck').innerHTML = output;
    }

    faceUp (id){
        document.getElementById(`${id}`).lastChild.style.visibility = 'visible';
        document.getElementById(`${id}`).classList = 'card show-card';
    }

    faceDown(id){
        document.getElementById(`${id}`).classList = 'card hide-card hide-animation';
        document.getElementById(`${id}`).lastChild.style.visibility = 'hidden';
    }

}