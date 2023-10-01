import {initPage} from './intialize';
import { arrayRef } from '../storage';
export {createUI};




// create a function that converts my database array into DOM elements and returns that (attach event listeners and all that jazz so i can actively edit each task from UI as well).
// then basically create another function that appends those elements to the different project tabs.
// before that, I need to decide on a way to organize my database array so I can -- done.


function updateTaskBoard(projectName){

    let Board = document.querySelector('div.card-list');
    
    let taskCard = document.createElement('div');
    let taskTitle = document.createElement('div');
    let taskPriority = document.createElement('div');
    let taskDueDate = document.createElement('div');
    
    taskCard.classList.add('card');
    taskTitle.classList.add('title');
    taskPriority.classList.add('priority');
    taskDueDate.classList.add('duedate');

    taskCard.appendChild(taskTitle);
    taskCard.appendChild(taskPriority);
    taskCard.appendChild(taskDueDate);

    arrayRef[projectName].forEach(task => {
        let card = taskCard.cloneNode(true);

        card.querySelector('.title').textContent = `Title: ${task.getTitle()}`;
        card.querySelector('.priority').textContent = `Priority: ${task.getPriority()}`;
        card.querySelector('.duedate').textContent = `Due date: ${task.getDueDate()}`;
        


        Board.appendChild(card);

    });
}





function createUI(){
    initPage();

    updateTaskBoard('none');

}









