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
        let shuffled = this.cardDeck.sort(()=>{
            return Math.random() - 0.5;
        })
        console.log(shuffled);
    }
}

export let deck = new Deck ();
