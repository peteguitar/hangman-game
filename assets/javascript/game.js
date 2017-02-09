

// here is th array of words to choose from

var randomWordArr = ["beer", "wine","chimay","brewery", "alcohol", "orval", "food", "pizza"];

var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];


var s;
var count = 0;
var answerArray = [];

function startUp()

{
	for var i = 0;i <randomWord.length; i++
	{

		answerArray[i] = "";
	}


	s= answerArray.join("");
	document.getElementById("").innerHTML = s;


}

function Letter ()
{
	var letter = document.getElementById("").value;

	if (letter.length > 0)
}

		for (var i = 0; i <randomWord.length; i++)
		{
			if (randomWord[i]===letter)
			{

					answerArray[i] = letter;

			}

		}

		count++;
		document.getElementsById("").innerHTML = "No of Clicks: " + count;
		document.getElementsById("").innerHTML = answerArray.join;("");
		{

		if(count>5)
			document.getElementsById("").innerHTML = "";
		}
