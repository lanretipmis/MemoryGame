!function(e){var a={};function t(c){if(a[c])return a[c].exports;var i=a[c]={i:c,l:!1,exports:{}};return e[c].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=a,t.d=function(e,a,c){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:c})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)t.d(c,i,function(a){return e[a]}.bind(null,i));return c},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a,t){"use strict";t.r(a);const c=new class{constructor(){this.cardDeck=[{icon:'<i class="fas fa-frog"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-frog"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-atom"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-atom"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-bath"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-bath"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-bowling-ball"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-bowling-ball"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-brain"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-brain"></i>',faceUp:!1,matched:!1},{icon:'<i class="fab fa-forumbee"></i>',faceUp:!1,matched:!1},{icon:'<i class="fab fa-forumbee"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-gem"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-gem"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-guitar"></i>',faceUp:!1,matched:!1},{icon:'<i class="fas fa-guitar"></i>',faceUp:!1,matched:!1}]}shuffle(){let e=this.cardDeck;for(let a=e.length-1;a--;){let t=Math.floor(Math.random()*(a+1));[e[a],e[t]]=[e[t],e[a]]}return e}isIconMatched(e,a,t){return e[a].icon===e[t].icon}},i=(new class{constructor(){this.gameTimer=null,this.gameTimerMin=0,this.gameTimerSec=0,this.secondsDom=0,this.minutesDom=0}buildDeck(e){document.querySelector(".deck")}},new class{constructor(){this.deck=null,this.gameDeck=[],this.gameUI=null,this.moveCount=0,this.flipCount=0,this.matchCount=0,this.firstCard=void 0,this.deckFragment=null,this.isTurnInProgress=!1}setDeck(e){this.deck=e}setUI(e){this.gameUI=e}showDeck(){let e="";for(let a of this.deck)e+=` <li class="card" id='1'>${a.icon}</i></li>`;document.querySelector(".deck").innerHTML=e}});i.setDeck(c.shuffle()),i.showDeck()}]);