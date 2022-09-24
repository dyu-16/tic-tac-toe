let ticTacToe = function () {
	let allBoxes = document.getElementsByClassName("XorO");

	let buttonCount = 0;

	let addToButtonCount = function () {
		buttonCount++;
		if (buttonCount > 9) {
			buttonCount = 10;
		}
		console.log(buttonCount);
	};

	let winConditionX = ["X", "X", "X"];
	let winConditionO = ["O", "O", "O"];

	let xWins = false;
	let oWins = false;

	let reset = document.getElementById("reset");

	reset.onclick = function () {
		buttonCount = 0;
		for (ab = 0; ab < allBoxes.length; ab++) {
			allBoxes[ab].innerHTML = "";
			allBoxes[ab].disabled = false;
			let h3 = document.querySelector("h3");
			h3.innerHTML = "";
			xWins = false;
			oWins = false;
		}
	};

	let winConditionOne = document.getElementsByClassName("winConditionOne");
	let winConditionTwo = document.getElementsByClassName("winConditionTwo");
	let winConditionThree = document.getElementsByClassName("winConditionThree");
	let winConditionFour = document.getElementsByClassName("winConditionFour");
	let winConditionFive = document.getElementsByClassName("winConditionFive");
	let winConditionSix = document.getElementsByClassName("winConditionSix");
	let winConditionSeven = document.getElementsByClassName("winConditionSeven");
	let winConditionEight = document.getElementsByClassName("winConditionEight");

	let winConditions = [
		winConditionOne,
		winConditionTwo,
		winConditionThree,
		winConditionFour,
		winConditionFive,
		winConditionSix,
		winConditionSeven,
		winConditionEight
	];

	let threeInARow = function () {
		for (let x = 0; x < winConditions.length; x++) {
			let currentWinCond = winConditions[x];
			let curWinCondArr = [];
			for (let y = 0; y < currentWinCond.length; y++) {
				console.log(currentWinCond[y].innerHTML);
				curWinCondArr.push(currentWinCond[y].innerHTML);
			}
			console.log(curWinCondArr);
			if (JSON.stringify(curWinCondArr) === JSON.stringify(winConditionX)) {
				xWins = true;
			} else if (
				JSON.stringify(curWinCondArr) === JSON.stringify(winConditionO)
			)
				oWins = true;
		}
	};

	let winnerXorO = function () {
		let body = document.querySelector("body");
		let h3 = document.querySelector("h3");
		if (xWins === true) {
			h3.innerHTML = "Player One Wins!";
		} else if (oWins === true) {
			h3.innerHTML = "Player Two Wins!";
		} else if (buttonCount > 8) {
			h3.innerHTML = "Tie!";
		}
	};

	for (let i = 0; i < allBoxes.length; i++) {
		allBoxes[i].onclick = function () {
			addToButtonCount();
			if (buttonCount > 9 || xWins === true || oWins === true) {
				return window.alert("Please click Reset ! :)");
			} else if (buttonCount % 2 !== 0) {
				allBoxes[i].innerHTML = "X";
				allBoxes[i].disabled = true;
			} else if (buttonCount % 2 === 0) {
				allBoxes[i].innerHTML = "O";
				allBoxes[i].disabled = true;
			}
			threeInARow();
			console.log(xWins, oWins);
			console.log(JSON.stringify(winConditionX, ": End of on click loop"));
			winnerXorO();
		};
	}
};

ticTacToe();
