import './style.css';
import { TaskManager } from './internal';
import { arrayRef, storageManager } from './internal';

//let taskManager = TaskManager();
let vtest = TaskManager.createDefaultTask("task number 2");
//console.log(vtest.getTitle());
TaskManager.deleteDefaultTask("task number 2");

TaskManager.createDefaultTask("task number 1");
TaskManager.createDefaultTask("task number 2");
TaskManager.createDefaultTask("task number 3");
TaskManager.createDefaultTask("task number 4");
TaskManager.createDefaultTask("task number 5");
TaskManager.createDefaultTask("task number 6");
TaskManager.createDefaultTask("task number 7");


//arrayRef[5].setTitle("ibh")

console.log(arrayRef);
//storageManager.reloadDataFromStorage();