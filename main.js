var checkBox = '<input type="checkbox"></input>';

var submitList = document.querySelector('.submitListBtn');
var toDoEntry = document.querySelector('.listItemBar');
var listEntries = document.querySelector('.listEntries');

var userEntry = [];

function renderEntries(todos) {
	var newEntries = '';
	for (var i = 0; i < todos.length; i++) {
		newEntries += '<li>'+todos[i]+'</li>'+checkBox;
		listEntries.innerHTML = newEntries;
	}
}

toDoEntry.addEventListener('click', function() {
	toDoEntry.value = '';
});

submitList.addEventListener('click', function(e) {
	e.preventDefault();
	userEntry.push(toDoEntry.value);
	renderEntries(userEntry);
});