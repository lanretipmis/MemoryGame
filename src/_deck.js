class Deck {
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
     let j, temp;
     let arr = this.cardDeck;
     for (let i=arr.length-1; i>0, i--;){
        j = Math.floor(Math.random()*(i+1));
        temp = arr[j];
        arr[j]= arr[i];
        arr[i] = temp;
     }
     return arr; 
    }
}

export let deck = new Deck ();

