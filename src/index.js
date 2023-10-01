import './style.css';
import { TaskManager } from './internal';
import { arrayRef, storageManager } from './internal';
import * as UI from './UI/UI';

UI.createUI();
//TaskManager.createTestTasks(25);
arrayRef[2].setProject('blah boii');
// remember how to change task details.
console.log(arrayRef);

