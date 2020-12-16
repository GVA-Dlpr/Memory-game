/*
document.addEventListener('DOMContentLoaded', function()  {
    var cardArray =[
    {
        name: 'fries',
        img: 'images/fries.png'
    },
        {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
        {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]
    cardArray.sort( function() {
        0.5 - Math.random()
    })

    
var grid = document.querySelector('.grid')
var resultDisplay = document.querySelector('#result')
var cardsChosen =[];
var cardChosenId=[];
var cardsWon =[];
    
    function createBoard() {
        for(let i = 0 ; i< cardArray.length;i++){
                var card = document.createElement('img')
                card.setAttribute('src' , 'images/blank.png')
                card.setAttribute('data-id',i)
                card.addEventListener('click' , flipCard)
                grid.appendChild(card)
            }
    }
    
    
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        var optionOneId =cardChosenId[0]
        var optionTwoId =cardChosenId[1]
        if(cardChosenId[0]=== cardChosenId[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src' , 'images/white.png')
            cards[optionTwoId].setAttribute('src' , 'images/white.png')
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src' ,'images/blank.png')
            cards[optionTwoId].setAttribute('src' ,'images/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen =[]
        cardChosenId=[]
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent='Congratulations! You found them all '
        }
    }
    
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch,500)
        }
    }
    createBoard()

}) */


document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]
  
    cardArray.sort( ()=> {
        0.5 - Math.random()
    })

    
var grid = document.querySelector('.grid')
var resultDisplay = document.querySelector('#result')
var cardsChosen =[]
var cardsChosenId=[]
var cardsWon =[]
  
    //create your board
      function createBoard() {
        for(let i = 0 ; i< cardArray.length;i++){
                var card = document.createElement('img')
                card.setAttribute('src' , 'images/blank.png')
                card.setAttribute('data-id',i)
                card.addEventListener('click' , flipCard)
                grid.appendChild(card)
            }
    }
  
    //check for matches
    function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch,500)
        }
    }
  
    createBoard()
  })