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

    faceUp (e){
        e.preventDefault();
        if (e.target.classList == 'card hide-card') {
            this.classList = 'card';
            //надо как то накрыть элемент, потому что при нажатии в центр квадрата(то есть на саму иконку) квадрат не изчезает.
        }

       console.log(e.target)
    }
}