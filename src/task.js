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


let test1 = new Task('test task');
console.log(test1)

let TaskManager = function () {



	console.log("testing123")
	const createDefaultTask = function (title, project ='none') { 
		let task = new Task(title, project);
		
		arrayRef.push(task);
		storageManager.saveDataToStorage();

		return task;
	}
	const deleteDefaultTask = function (title) {

		console.log("Before deletion length", arrayRef.length);
		

		for(let i = 0; i < arrayRef.length; i++){
			if(arrayRef[i].title === title){
				arrayRef.splice(i,1);
				i -= 1;
				console.log("item deleted.");
			}
		}

		console.log("After deletion length", arrayRef.length);
		storageManager.saveDataToStorage();
	}

	


	return {
		createDefaultTask,
		deleteDefaultTask,


	}
}();





