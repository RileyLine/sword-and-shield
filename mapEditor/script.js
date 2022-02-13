let mapHolder = document.querySelector(".mapHolder");
let selectedColBox = document.querySelector(".selectedCol");
let buildBtn = document.querySelector("#submit");
let mapOutput = document.querySelector("#mapOutput");

let blocks;
let selectedCol;
let mapCoords = [];
let blockArray = [];

// Listener for the submit button
buildBtn.addEventListener('click', submitBuild)

// Create the blocks on screen
for (r = 0; r < 21; r++) {
	for (c = 0; c < 32; c++) {
		let createdBlock = document.createElement("div");

		createdBlock.classList.add("block");
		createdBlock.classList.add(`r${r}`);
		createdBlock.classList.add(`c${c}`);

		mapHolder.appendChild(createdBlock);

	}
}
blocks = document.querySelectorAll(".block");

// Set up multi-dimensional array for the blocks
for (i = 0; i < 21; i++) {
	blockArray[i] = document.querySelectorAll(".r" + i);
}

// When a key is pressed, determine which it was and assign a colour to the keypress
window.addEventListener('keydown', (event) => {
	switch(event.key) {
		case "0":
			changeBlock("#303030", 0);
			break;
		case "1":
			changeBlock("#724D08", 1);
			break;
		case "2":
			changeBlock("#90A955", 2);
			break;
		case "3":
			changeBlock("#90a122", 3);
			break;
		case "4":
			changeBlock("blue", 4);
			break;
	}
})

// When called it changes the block you will be drawing with
function changeBlock(col, num) {
	selectedColBox.style.backgroundColor = col;
	selectedCol = col;
	selectedColNum = num;
}

// Event handling of left and right clicking.
// Left click will colour the first block and add an event listener to all the of the blocks on the board so they can be coloured.
for (i of blocks) {
	i.addEventListener('mousedown', (event) => {
		
		// Hover listener to colour blocks that get hovered on
		for (i of blocks) {
			i.addEventListener('mouseenter', colourBlock)
		}

		switch(event.button) {
			case 0:
				event.target.style.backgroundColor = selectedCol;
				event.target.setAttribute("id", `b${selectedColNum}`);
				break;
			case 2:
				for (i of blocks) {
					i.removeEventListener('mouseenter', colourBlock)
				}
				break;
		}
		
	})

}

// Adds the selectedCol to the hovered block's background colour.
function colourBlock(event) {
	event.target.style.backgroundColor = selectedCol;
	event.target.setAttribute("id", `b${selectedColNum}`);
}

// Removes the ability to right-click so the menu doesn't pop up when we try to cancel block drawing.
window.addEventListener('contextmenu', function (e) { 
  // do something here... 
  e.preventDefault(); 
}, false);


// Makes mapCoords a 2d array.
for (i = 0; i < 21; i++) {
	mapCoords[i] = [];
}

// Fires when submit is clicked, makes the array entries, all 0, 1, 2, 3, or 4 (removes first letter "b" that we need because ID's in HTML MUST start with a letter).
function submitBuild() {
	mapOutput.innerText = "";

	for (r = 0; r < 21; r++) {
		for (c = 0; c < 32; c++) {
			mapCoords[r][c] = parseInt(blockArray[r][c].id.slice(1));
		}
	}
	
	displayArray();
}

// Displays the numbers to the screen in a 2D array that we can easily copy.
function displayArray() {
	for (i = 0; i < 21; i++) {
		mapOutput.innerHTML += `[${mapCoords[i]}],\n`;
	}
}