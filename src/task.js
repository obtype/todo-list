export { TaskManager, Task };
import { storageManager, arrayRef } from "./internal";


/* let Task = function(title, description = null, dueDate = null, priority = null, notes = null){

	const setTitle = function(newtitle){
		this.title = newtitle;
	}

	const getTitle = function(){
		return this.title;
	}



	return{
		title,
		getTitle,
		setTitle,
		description,
		dueDate,
		priority,
		notes
	}
} */

let Task = function (title, project = null,description = null, dueDate = null, priority = null, notes = null) {

	this.title = title;
	this.project = project;
	this.description = description;
	this.dueDate = dueDate;
	this.priority = priority;
	this.notes = notes;


};

//The factory function above will create Task type objects when it is called using the 'new' keyword, eg. 
// let test_task = new Task('Cool Title');
//The below lines are adding all the get and set functions to the prototype of the Task function so that they can be used attached to the stored tasks later on and can be executed when needed. (the functions aren't stored in the .JSON storage so thats why we need to do this. Also, functions should be stored on the prototype anyways to save space lol.)  

Task.prototype.setTitle = function (newTitle) {
	this.title = newTitle;
	storageManager.saveDataToStorage();
	console.log("saved new title to the database");
}

Task.prototype.getTitle = function () {
	return this.title;
}

Task.prototype.setProject = function (newProject) {
	this.project = newProject;
	storageManager.saveDataToStorage();
}

Task.prototype.getProject = function () {
	return this.project;
}

Task.prototype.setDescription = function (newDescription) {
	this.description = newDescription;
	storageManager.saveDataToStorage();
}

Task.prototype.getDescription = function () {
	return this.description;
}

Task.prototype.setDueDate = function (newDueDate) {
	this.dueDate = newDueDate;
	storageManager.saveDataToStorage();
}

Task.prototype.getDueDate = function () {
	return this.dueDate;
}

Task.prototype.setPriority = function (newPriority) {
	this.priority = newPriority;
	storageManager.saveDataToStorage();
}

Task.prototype.getPriority = function () {
	return this.priority;
}

Task.prototype.setNotes = function (newNotes) {
	this.notes = newNotes;
	storageManager.saveDataToStorage();
}

Task.prototype.getNotes = function () {
	return this.notes;
}


/* Task.prototype.setTitle = function(newTitle) {
	this.title = newTitle;
} */




/* let Project = function (name) {
	let tasks = [];     //it should be a list of Task objects?

	const addTask = function (title, description = null, dueDate = null, priority = null, notes = null) {
		tasks[tasks.length] = new Task(title, description = null, dueDate = null, priority = null, notes = null);
	}

	const removeTask = function (title) {
		tasks.forEach((task, index) => {
			if (task.title === title) {
				tasks.splice(index, 1);
			}
		})
	}

	return {
		name,
		tasks
	}
}
 */

let test1 = new Task('test task');
//test1.setPriority("abc")
console.log(test1)

let TaskManager = function () {
	//test1.setPriority('v imp');
	//console.log(test1.getPriority());


	const createDefaultTask = function (title, project ='none') { 
		let task = new Task(title, project);
		//invoke a funtion in storage.js which will store this newly created task in an array or something.
		//storageManager.addToStorage(task);
		arrayRef.push(task);
		storageManager.saveDataToStorage();

		return task;
	}
	const deleteDefaultTask = function (title) {
		//arrayOfAllTasks is something I would need to import from storage.js later on. rn its just a placeholder.
		console.log("Before deletion", arrayRef);
		arrayRef.forEach((task, index) => {
			if (task.title === title) {
				arrayRef.splice(index, 1);
				
				
			}
		})
		console.log("After deletion", arrayRef);
		storageManager.saveDataToStorage();
		//Just need to test if this deletion function works.
	}

	const createProjectTask = function (project, title) { }
	const deleteProjectTask = function (project, title) { }

	const createProject = function (name) { }


/* 
	Task.prototype.mubifun = function () { console.log(1) };


	

	//localStorage.setItem("temp", JSON.stringify(test1));
	let temp = JSON.parse(localStorage.getItem('temp'));
	
	Object.assign(Object.getPrototypeOf(temp), Task.prototype);
	

	//console.log(temp.setPriority("nigga"));
	//console.log();
	temp.mubifun()
	localStorage.setItem("temp", JSON.stringify(temp));

 */


	return {
		createDefaultTask,
		deleteDefaultTask,


	}
}();





