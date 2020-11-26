/* var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress); */


//---------------------------------------------------------------------------------

//Using the Shopping List files from the previous videos update the shopping list app to do the following:

//1. If you click on the list item, it toggles the .done  class on and off.

//2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

//3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

var button = document.getElementById("enterButton");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");


function inputLength() {
	return input.value.length;
}

function createLiElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function markDone() {
	li.classList.toggle("done");
}

function createDeleteButton() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete Item";
	document.getElementsByTagName(li).appendChild(btn);
}

button.addEventListener("click", function() {
	if(inputLength() > 0) {
	createLiElement()
	createDeleteButton()
	}
})

li.addEventListener("click", markDone);

// I couldn't create the keyboard key mapping event 
//.keyCode method has been deprecated and still searching for its replacement:

/* input.addEventListener("keypress", function (event) {
	if(input.value.length > 0 && event.keyCode == 13) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	}
}) 
*/



