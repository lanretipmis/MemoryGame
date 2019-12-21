 export default class Deck {
    constructor (){
        this.cardDeck = [
            {icon : '<i class="fas fa-frog"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-frog"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-atom"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-atom"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-bath"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-bath"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-bowling-ball"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-bowling-ball"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-brain"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-brain"></i>', faceUp : false, matched: false},
            {icon : '<i class="fab fa-forumbee"></i>', faceUp : false, matched: false},
            {icon : '<i class="fab fa-forumbee"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-gem"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-gem"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-guitar"></i>', faceUp : false, matched: false},
            {icon : '<i class="fas fa-guitar"></i>', faceUp : false, matched: false},
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


