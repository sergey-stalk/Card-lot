var curArr = [];
var currentCard;
var j = 0;
var rezFind;
var playerIndex;
var on = 0;
var cardCounter = 0;
var cardLength = 2;


$('.card').click(function () {
	if (j == 0) {
		random();
	}
	rubaha = $(this).attr('class');
	if (rubaha == 'card shirt') {
		$(this).removeClass('shirt').addClass("c" + currentCard);
		curArr[j] = currentCard;
		j++;
		randCheck();
	}
	cardCounter++;
	endGame();
});

var start = function () {
	$('.card').removeClass().addClass('hide');
	for (var i = 0; i < 2; i++) {
		$('.hide:first').removeClass().addClass('card shirt');
	}
}
start();

var random = function() {
	currentCard = Math.floor(Math.random() * 13 + 1);
}

var randCheck = function () {
	random();
	find();
	if (rezFind == 1) {
		rezFind = 0;
		return randCheck();
	}
}

var find = function () {
	
	for (var i = 0; i < curArr.length; i++) {
		if (currentCard == curArr[i]) {
			rezFind = 1;
		}
	}
}

$('.player').click(function () {
	playerIndex = $(this).index() + 2;
	addCard();
});

function addCard() {
	$('.card').removeClass().addClass('card shirt');
	curArr = [];
	$('.card').removeClass().addClass('hide');
	for (var i = 0; i < playerIndex; i++) {
		$('.hide:first').removeClass().addClass('card shirt');
	}
	$('.res').hide();
	cardLength = playerIndex;
	cardCounter = 0;
}
cardCounter = 0;
$('.player').hide();

$('.burg').click(function () {
	$('.bar').toggleClass('change');
	$('.player').toggle('slide');
});

$('.res').hide();

var endGame = function () {
	if (cardCounter == cardLength) {
		cardCounter = 0;
		$('.res').show('slow');
	}
}

$('.res').click(function () {
	curArr = [];
	$('.card').removeClass().addClass('card shirt');
	$('.res').hide('slow');
});

$('.bg').hide();

$('.bgBurg').click(function () {
	$('.bgBar').toggleClass('change');
	$('.bg').slideToggle();
});