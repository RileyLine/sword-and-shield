/* 
	0 = OOB/Wall
	1 = Path
	2 = Grass
	3 = Tall Grass
	4 = Water
*/

console.log(loadingScreen.children)

// Building the divs for the gameboard, giving them classes
for (r = 0; r < 21; r++) {
	for (c = 0; c < 32; c++) {
		let createdBlock = document.createElement("div");

		createdBlock.classList.add("block");
		createdBlock.classList.add(`r${r}`);
		createdBlock.classList.add(`c${c}`);

		// Check for mobile
		if (screenHeight < 500 || screenWidth < 900) {
			createdBlock.style.height = '16px';
			createdBlock.style.width = '16px';

			loadingScreen.children[0].style.fontSize = "24pt";
			loadingScreen.children[1].style.width = "auto";
			loadingScreen.children[1].style.height = "100px";

			gameDisplay.style.gridTemplateColumns = "512px auto";
			gameDisplay.style.gridTemplateRows = "140px 196px";
			gameDisplay.style.width = "auto";

			createScreen.style.flexDirection = "row";
			warriorBtn.style.width = "45%";
			warriorBtn.style.height = "auto";
			warriorBtn.style.padding = "10px";
			mageBtn.style.width = "45%";
			mageBtn.style.height = "auto";
			mageBtn.style.padding = "10px";
			picArea.forEach(el => {
				el.style.display = "flex";
				el.style.alignItems = "flex-end";
			})
			classImg.forEach(el => {
				el.style.height = "90%";
				el.style.opacity = "50%";
				el.style.zIndex = "1";
			})
			descArea.forEach(el => {
				el.style.zIndex = "2"
			})
			promptArea.style.width = "10%";
			promptArea.style.height = "auto";
			promptArea.style.borderTop = "none";
			promptArea.style.borderBottom = "none";
			promptArea.style.borderLeft = "5px solid #460000";
			promptArea.style.borderRight = "5px solid #460000";
			promptArea.style.writingMode = "vertical-lr";
			promptArea.style.fontSize = "16px";

			gameScreen.style.gridTemplateColumns = "repeat(32, 16px)"
			gameScreen.style.gridTemplateRows = "repeat(21, 16px)"
			gameScreen.style.gridColumn = "1 / 2";
			gameScreen.style.gridRow = "1 / 3";

			gameLog.style.display = "none";

			userInfo.style.gridColumn = "2 / 3"
			userInfo.style.gridRow = "1 / 2"
			userInfo.style.flexDirection = "row";
			userInfo.style.border = "5px solid #460000";

			userInputArea.style.gridColumn = "2 / 3"
			userInputArea.style.gridRow = "2 / 3"
			userInputArea.style.border = "5px solid #460000";
			userInputArea.style.borderTop = "none";

		}

		gameScreen.appendChild(createdBlock);
	}
}

// Holds all the div elements, in a row and column grid
let boardArray = [];

// Putting the rows into the 2D boardArray
for (i = 0; i < 21; i++) {
	boardArray[i] = document.querySelectorAll(".r" + i);
}

// Load the map we want (map001 to start)
loadMap(map001);
