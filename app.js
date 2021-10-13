/*
// elemendi loomine
const li = document.createElement('li');

const list = document.querySelector('ul');
// klassi maaramine
li.className = 'collection-item';

// teksti lisamine
li.appendChild(document.createTextNode('Study element creation'));

const link = document.createElement('a');
link.className = 'secondary-content';
link.appendChild(document.createTextNode('X'));

// lisa atribuut vaartusega
link.setAttribute('href', '#');

li.appendChild(link);

// elemendi lisamine teise elemendi sisse
list.appendChild(li);
*/

// event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

// submit
form.addEventListener('submit', addTask);

function addTask(e) {
	const li = document.createElement('li');
	const list = document.querySelector('ul');
	
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));

	const link = document.createElement('a');
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('X'));
	link.setAttribute('href', '#');

	li.appendChild(link);
	list.appendChild(li);

	taskInput.value = '';

	e.preventDefault();
}

const taskList = document.querySelector('ul');
//kustutamine

taskList.addEventListener('click', deleteTask);

function deleteTask(e) {
	if(e.target.textContent == 'X'){
		if(confirm('Are you sure you want to delete this task?'));
			e.target.parentElement.remove();
	}
}

const delAllBtn = document.querySelector("del-tasks");

delAllBtn.addEventListener('click', deleteTasks);

function deleteTasks(e) {
	while(taskList.firstChild){
		task.List.removeChild(taskList.firstChild);
	}
}

/*
const taskLists = document.querySelector('ul');
taskLists.addEventListener('click', deleteTasks);

function deleteTasks(e) {
	if(e.target.textContent == 'Delete tasks'){
		if(confirm('Are you sure you want to delete all these tasks?'));
			console.log('jah');
	}
}
