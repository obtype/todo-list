import {initPage} from './intialize';
import { arrayRef } from '../storage';
import { TaskManager } from '../task';
export {createUI};




// create a function that converts my database array into DOM elements and returns that (attach event listeners and all that jazz so i can actively edit each task from UI as well).
// then basically create another function that appends those elements to the different project tabs.
// before that, I need to decide on a way to organize my database array so I can -- done.


function clearBoard(){
    let Board = document.querySelector('div.card-list');
    while(Board.firstChild){
        Board.removeChild(Board.firstChild);        
    }
}


function updateTaskBoard(projectName){

    let Board = document.querySelector('div.card-list');
    clearBoard();
    
    let taskCard = document.createElement('div');
    let taskTitle = document.createElement('div');
    let taskPriority = document.createElement('div');
    let taskDueDate = document.createElement('div');
    let deleteButton = document.createElement('button');
    let viewButton = document.createElement('button');
    
    taskCard.classList.add('card');
    taskTitle.classList.add('title');
    taskPriority.classList.add('priority');
    taskDueDate.classList.add('duedate');
    deleteButton.classList.add('delete');
    viewButton.classList.add('view');

    
    taskCard.appendChild(taskTitle);
    taskCard.appendChild(taskPriority);
    taskCard.appendChild(taskDueDate);
    taskCard.appendChild(deleteButton);
    taskCard.appendChild(viewButton);


    arrayRef[projectName].forEach(task => {
        let card = taskCard.cloneNode(true);

        card.querySelector('.title').textContent = `Title: ${task.getTitle()}`;
        card.querySelector('.priority').textContent = `Priority: ${task.getPriority()}`;
        card.querySelector('.duedate').textContent = `Due date: ${task.getDueDate()}`;
        card.querySelector('.delete').textContent = 'X';
        card.querySelector('.view').textContent = 'O';

        card.setAttribute('data-project', task.getProject());
        card.setAttribute('data-index', arrayRef[task.getProject()].indexOf(task));
        // OK, I have decided to include 2 data-attributes: index and project. This will make the process of identifying tasks much more streamlined and reliable.      -- done
        //console.log(arrayRef[task.getProject()].indexOf(task));

        card.querySelector('.delete').addEventListener('click', event => {
            let targetProject = event.target.parentNode.getAttribute('data-project');
            let targetIndex = event.target.parentNode.getAttribute('data-index');
            TaskManager.deleteTask(targetProject, targetIndex);
            updateTaskBoard(projectName);
        });

        Board.appendChild(card);

    });
}

/* function getListOfProjects(){
    arrayRef
}
 */

function updateProjectList(){
    let listOfProjects = Object.keys(arrayRef);
    listOfProjects.shift();
    listOfProjects.shift();

    let projectList = document.querySelector('.project ul');
    while(projectList.firstChild){
        projectList.removeChild(projectList.firstChild);
    }



    listOfProjects.forEach(project => {
        let projectItem = document.createElement('li');
        projectItem.setAttribute('data-project', project);
        projectItem.textContent = project;

        projectItem.addEventListener('click', e => updateTaskBoard(e.target.getAttribute('data-project')));

        projectList.appendChild(projectItem);
        //This loop updates the project list according to the projects 
    })

}


function addEventHandlers() {
   

    let projectList = document.querySelector('.project ul');
    while(projectList.firstChild){
        projectList.removeChild(projectList.firstChild);        //clear the previous list items.
    }

    updateProjectList();

    let defaultList = document.querySelector('.default .title');

    defaultList.addEventListener('click', e => updateTaskBoard(e.target.getAttribute('data-project')));

}





function createUI(){
    initPage();

    updateTaskBoard('none');
    addEventHandlers();
}









