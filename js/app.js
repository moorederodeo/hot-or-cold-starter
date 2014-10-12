
$(document).ready(function(){
	var guessList = $('#guessList');
	var answer = 0;
	var textInput = $(this).find("input:text");
	var count = $("#count");
	var feedback = $("#feedback");

	var newGame = function () {
		//generate random number
		answer = Math.floor(Math.random() * (100-1)) + 1;
		//reset old game stuff
		guessList.find("li").remove();
		//set guess count to 0
		count.text(0);
	};

	var hotOrCold = function (guess) {
		var diff = Math.abs(guess - answer);
		if (diff >= 50) {
			//ice cold
			feedback.text("Ice Cold");
		}
		else if (diff >= 30) {
			//cold
			feedback.text("Cold");
		}
		else if (diff >= 20) {
			//lukewarm
			feedback.text("Lukewarm");
		}
		else if (diff >= 15) {
			//warm
			feedback.text("Warm");
		}
		else if (diff >= 10) {
			//hot
			feedback.text("Hot");
		}
		else if (diff >= 1) {
			//blazing hot
			feedback.text("Blazing Hot");
		}
		else if (diff === 0) {
			//Correct!
			feedback.text("Correct!");
			return 1;
		}
	};

	//initialize the number
	newGame();



	$('form').submit(function () {
		//grab number
		var num = +textInput.val();
		if (num >= 1 && num <= 100) {
			//add number to list
			guessList.append("<li>"+num+"</li>");
			//tell if it's lesser, greater, right
			hotOrCold(num);
			//increase guess count
			count.text(+count.text() + 1);
		}
		textInput.val("");
		return false;
	});





	$(".new").click(function () {
		newGame();
	});










	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


