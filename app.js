/*
if(tingimus) {
	// tegevused if puhul
} else {
	// tegevused else puhul
}


const testid = 100;

if(testid == 100){
	console.log('Õige')
} else {
	console.log('Vale')
}

*/

/*
let val;
const today = new item Date();

val = today.getMonth(); 
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliSeconds();
val = today.getTime();
*/

const today = new Date.getDay();

switch (today) {
	case 0;
		console.log('Pühapäev')
	case 1;
		console.log('Esmaspäev')
	case 2;
		console.log('Teisipäev')
	case 3;
		console.log('Kolmapäev')
	case 4;
		console.log('Neljapäev')
	case 5;
		console.log('Reede')
	case 6;
		console.log('Laupäev')
}

