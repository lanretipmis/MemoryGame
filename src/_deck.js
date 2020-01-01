export default class Deck {
    constructor (){
        this.cardDeck = [
            {icon : '<i class="fas fa-frog fa-lg"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-frog fa-lg"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-atom fa-lg"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-atom fa-lg"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-bath fa-lg"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-bath fa-lg"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-bowling-ball fa-lg"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-bowling-ball fa-lg"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-brain fa-lg"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-brain fa-lg"></i>', faceUp : false, matched: false},
            {icon : '<i class="fab fa-forumbee fa-lg"></i>', faceUp : false, matched: false},
            {icon : '<i class="fab fa-forumbee fa-lg"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-gem fa-lg"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-gem fa-lg"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-guitar fa-lg"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-guitar fa-lg"></i>', faceUp : false, matched: false},
        ]
    }

    shuffle (){
     let arr = this.cardDeck;
     for (let i=arr.length-1; i>0, i--;){
        let j = Math.floor(Math.random()*(i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
     }
     return arr; 
    }

    isIconMatched (cardDeck, firstCardIndex, secondCardIndex){
        if (cardDeck[firstCardIndex].icon === cardDeck[secondCardIndex].icon){
            return true;
        }   else {
            return false;
        }
    }
}


