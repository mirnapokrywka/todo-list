var itemList = [];

function addToItem() {
	var addItem = document.getElementById('addItem').value;
	itemList.push(addItem);

	// for (var i = 0; i< myList.length; i++) {
	// 	var newItem = ""
	// }
	for (var i = 0;  i< itemList.length; i++){
		var newItem = itemList[i] + "<a href='#' onClick='removeItem(" + i + ");'>X</a>" + "<br>";
	};

	document.getElementById('items').innerHTML += newItem;
}

function removeItem(i){
	itemList.splice(i,1);

	var newItem = "";

	for (var i = 0; i <itemList.lenght; i++){
		newItem += itemList[i] + "<a href='#' onClick='removeItem(" + i + ");'>X</a>" + "<br>";
	}
	document.getElementById('items').innerHTML = newItem;
}