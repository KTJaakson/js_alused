// funktsiooni defineerimine (deklareemine)
function greeting(firstname, lastname){
	return 'Tere, ' + firstname + ' ' + lastname;
}
//funktsioonide kutsumine tööle

let greet = greeting('Karl', 'Jaakson');
console.log(greet);




console.log();
//funktsioon avaldamise kujul
const square = function(number = 3){
	return number * number;
}
console.log(square());

//
(function(){

}

//objekti see defineeritud funktsioonid
console.log();
const todo = {
	add: function(){
		console.log('add todo ...');
	}
	edit: function(id){
		console.log(`edit todo nr ${id} ...`);
	}
	delete: function(){
		console.log('delete todo ...');
	}
}

todo.add();
todo.edit(5);
todo.delete();