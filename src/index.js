import './style.css';
import { TaskManager } from './internal';
import { arrayRef, storageManager } from './internal';
import * as UI from './UI/UI';

UI.createUI();
//TaskManager.createTestTasks(5);
/* TaskManager.createProject('food');
TaskManager.createProject('house chores');
TaskManager.createTask('Make tea', 'food');
TaskManager.createTask('Make tea', 'none');
TaskManager.createTask('Make bed', 'house chores');
TaskManager.createTask('Make car', 'house chores');
TaskManager.createTask('Make tea', 'food'); */

TaskManager.createProject('mousies!');

console.log(arrayRef);

