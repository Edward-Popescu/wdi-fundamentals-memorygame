var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImg: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImg: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImg: "images/king-of-hearts.png",
	},
	{
		rank:"king",
		suit: "diamonds",
		cardImg: "images/king-of-diamonds.png",
	},
	];
var cardsInPlay = [] ;
var checkForMatch = function() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}
var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImg);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch()
	}
}
flipCard(0)
flipCard(2)