!function(e){var t={};function a(i){if(t[i])return t[i].exports;var c=t[i]={i:i,l:!1,exports:{}};return e[i].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(i,c,function(t){return e[t]}.bind(null,c));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);const i=new class{constructor(){this.cardDeck=[{icon:'<i class="fas fa-frog fa-lg"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-frog fa-lg"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-atom fa-lg"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-atom fa-lg"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-bath fa-lg"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-bath fa-lg"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-bowling-ball fa-lg"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-bowling-ball fa-lg"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-brain fa-lg"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-brain fa-lg"></i>',faceUp:!1,matched:!1},{icon:'<i class="fab fa-forumbee fa-lg"></i>',faceUp:!1,matched:!1},{icon:'<i class="fab fa-forumbee fa-lg"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-gem fa-lg"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-gem fa-lg"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-guitar fa-lg"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-guitar fa-lg"></i>',faceUp:!1,matched:!1}]}shuffle(){let e=this.cardDeck;for(let t=e.length-1;t--;){let a=Math.floor(Math.random()*(t+1));[e[t],e[a]]=[e[a],e[t]]}return e}isIconMatched(e,t,a){return e[t].icon===e[a].icon}},c=new class{constructor(){this.gameTimer=null,this.gameTimerMin=0,this.gameTimerSec=0,this.secondsDom=0,this.minutesDom=0}showDeck(e){let t="";e.forEach((e,a)=>{t+=`<li class="card hide-card" id='${a}'>${e.icon}</li>`}),document.querySelector(".deck").innerHTML=t}faceUp(e){document.getElementById(`${e}`).lastChild.style.visibility="visible",document.getElementById(`${e}`).classList="card show-card"}faceDown(e){document.getElementById(`${e}`).classList="card hide-card hide-animation",document.getElementById(`${e}`).lastChild.style.visibility="hidden"}},s=new class{constructor(){this.deck=null,this.gameDeck=[],this.gameUI=null,this.moveCount=0,this.flipCount=0,this.matchCount=0,this.firstCard=void 0,this.secCard=void 0,this.deckFragment=null,this.isTurnInProgress=!1}setDeck(e){this.deck=e}setUI(e){this.gameUI=e}startGame(){this.gameUI.showDeck(this.deck)}turn(e){return null!==e&&(this.deck[e].faceUp=!0,this.firstCard=e,this.moveCount++,this.flipCount++,console.log(this.deck),!(this.flipCount>2)&&void(this.flipCount<2?(this.gameUI.faceUp(e),this.secCard=e):2===this.flipCount&&(this.gameUI.faceUp(e),this.checkForMatch())))}checkForMatch(){this.deck[this.firstCard].icon==this.deck[this.secCard].icon&&this.deck[this.firstCard].matched==this.deck[this.secCard].matched?(this.matchCount++,this.flipCount=0,this.deck[this.firstCard].matched=!0,this.deck[this.firstCard].matched=!0):(this.flipCount=0,this.deck[this.firstCard].faceUp=!1,this.deck[this.secCard].faceUp=!1,setTimeout(()=>{this.gameUI.faceDown(this.firstCard),this.gameUI.faceDown(this.secCard)},400))}};s.setDeck(i.shuffle()),s.setUI(c),s.startGame(),document.querySelector(".deck").addEventListener("click",(function(e){e.preventDefault(),s.turn(e.target.getAttribute("id"))}))}]);