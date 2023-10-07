import {initPage} from './intialize';
//import { arrayRef } from '../storage';
import { arrayRef } from '../internal';
//import { TaskManager } from '../task';
import { TaskManager } from '../internal';
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

    let projectTitle = Board.parentNode.querySelector('.main > .title');
    projectTitle.textContent = (projectName === "none") ? "Default List" : projectName;
    projectTitle.setAttribute('data-project', projectName);

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

        card.querySelector('.delete').addEventListener('click', deleteTaskEvent);

        card.querySelector('.view').addEventListener('click', viewTaskEvent)


        Board.appendChild(card);

    });
    //the above loop adds all the task cards.

    let createTaskBtn = document.createElement('div');

    createTaskBtn.textContent = 'Create a new Task!';
    createTaskBtn.classList.add('create-task-btn');
    createTaskBtn.addEventListener('click', displayCreateTaskWindow)


    Board.appendChild(createTaskBtn);


}

function viewTaskEvent(event){
    //I am creating the event for view the task details.
    //I will create a new function that initializes the detailed task viewer, initTaskViewer();
    initTaskViewer(event.target.parentNode);
    let popupContainer = document.querySelector('.pop-container');
    popupContainer.style = 'display: flex;';

    //console.log(123);
}
function initTaskViewer(targetNode){
    let container = document.querySelector('.pop-container');
    let taskWindow = document.createElement('div');
    taskWindow.classList.add('view-task');

    let title = document.createElement('div');
    let description = document.createElement('div');
    let project = document.createElement('div');
    let priority = document.createElement('div');
    let dueDate = document.createElement('div');
    let notes = document.createElement('div');

    let task = TaskManager.getTaskFromNode(targetNode);

    console.log(task.getTitle());

    title.textContent = `Title: ${task.getTitle()} `;
    description.textContent = `Description: ${task.getDescription()}`;
    project.textContent = `Project: ${task.getProject()}`;
    priority.textContent = `Priority: ${task.getPriority()}`;
    dueDate.textContent = `Due Date: ${task.getDueDate()}`;
    notes .textContent = `Notes: ${task.getNotes()}`;


    taskWindow.appendChild(title);
    taskWindow.appendChild(description);
    taskWindow.appendChild(project);
    taskWindow.appendChild(priority);
    taskWindow.appendChild(dueDate);
    taskWindow.appendChild(notes);

    container.appendChild(taskWindow);


}


function deleteTaskEvent(event){
    {
        let targetProject = event.target.parentNode.getAttribute('data-project');
        let targetIndex = event.target.parentNode.getAttribute('data-index');
        TaskManager.deleteTask(targetProject, targetIndex);
        updateTaskBoard(event.target.parentNode.getAttribute('data-project'));
    }

}


function displayCreateTaskWindow(){
    initTaskCreator();
    let popupContainer = document.querySelector('.pop-container');
    popupContainer.style = 'display: flex;';

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



    let createProjectBtn = document.createElement('div');
    createProjectBtn.textContent = 'New project!';
    createProjectBtn.classList.add('create-project-btn');
    createProjectBtn.addEventListener('click', displayProjectCreator)
    

    projectList.appendChild(createProjectBtn);



}

function initProjectCreator(){


    let container = document.querySelector('.pop-container');

    while(container.firstChild){        //clear the container from before.
        container.removeChild(container.firstChild);
    }

    let taskWindow = document.createElement('form');

    taskWindow.classList.add('create', 'project');

    let projectNameContainer = document.createElement('div');
    let projectNameInput = document.createElement('input');
    let projectNameLabel = document.createElement('label');

    projectNameInput.setAttribute('name', 'name');
    projectNameLabel.setAttribute('for', 'name');

    projectNameLabel.textContent = 'Project Name: ';


    projectNameContainer.appendChild(projectNameLabel);
    projectNameContainer.appendChild(projectNameInput);


    let submitBtn = document.createElement('button');

    submitBtn.textContent = 'Create Project';

    submitBtn.addEventListener('click', createProjectEvent);
    taskWindow.appendChild(submitBtn);


    taskWindow.appendChild(projectNameContainer);
    container.appendChild(taskWindow);

}

function createProjectEvent(event){
    event.preventDefault();

    let createProjectFormData = new FormData(document.querySelector('form.create.project'));

    let projectName = createProjectFormData.get('name');

    if(projectName.trim() !== ''){
        TaskManager.createProject(projectName);
        updateProjectList();
        let popupContainer = document.querySelector('.pop-container');
        while(popupContainer.firstChild){
            popupContainer.removeChild(popupContainer.firstChild);
        }
        popupContainer.style = 'display: none;';

    }
    else{
        console.log('Enter something in the project name field!');
    }
  

}

function displayProjectCreator(){
    initProjectCreator();
    let popupContainer = document.querySelector('.pop-container');
    popupContainer.style = 'display: flex;';

}



function initTaskCreator(){
    //do this next prolly.
    let container = document.querySelector('.pop-container');

    while(container.firstChild){        //clear the container from before.
        container.removeChild(container.firstChild);
    }

    //let dashBoard = document.querySelector('.dashboard .main');
    let taskWindow = document.createElement('form');

    {   //This entire block is used to create the name input field.
        let title = document.createElement('input');
        let titleLabel = document.createElement('label');
        title.id = 'taskTitle';
        title.setAttribute('name', 'title');
        titleLabel.setAttribute('for', 'taskTitle');
        titleLabel.textContent = 'Task Title: ';

        let titleContainer = document.createElement('div');
        titleContainer.classList.add('title');
        titleContainer.appendChild(titleLabel);
        titleContainer.appendChild(title);
        taskWindow.appendChild(titleContainer);
    }

    {   
        let description = document.createElement('input');
        let descriptionLabel = document.createElement('label');
        description.id = 'taskDescription';
        description.setAttribute('name', 'description');
        descriptionLabel.setAttribute('for', 'taskDescription');
        descriptionLabel.textContent = 'Task Description: ';

        let descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('description');
        descriptionContainer.appendChild(descriptionLabel);
        descriptionContainer.appendChild(description);
        taskWindow.appendChild(descriptionContainer);
    }

    {   
        let priority = document.createElement('input');
        let priorityLabel = document.createElement('label');
        priority.id = 'taskPriority';
        priority.setAttribute('name', 'priority');
        priorityLabel.setAttribute('for', 'taskPriority');
        priorityLabel.textContent = 'Task Priority: ';

        let priorityContainer = document.createElement('div');
        priorityContainer.classList.add('priority');
        priorityContainer.appendChild(priorityLabel);
        priorityContainer.appendChild(priority);
        taskWindow.appendChild(priorityContainer);
    }

    {   
        let dueDate = document.createElement('input');
        let dueDateLabel = document.createElement('label');
        dueDate.id = 'taskDueDate';
        dueDate.setAttribute('name', 'dueDate');
        dueDateLabel.setAttribute('for', 'taskDueDate');
        dueDateLabel.textContent = 'Task DueDate: ';

        let dueDateContainer = document.createElement('div');
        dueDateContainer.classList.add('dueDate');
        dueDateContainer.appendChild(dueDateLabel);
        dueDateContainer.appendChild(dueDate);
        taskWindow.appendChild(dueDateContainer);
    }

    {   
        let notes = document.createElement('input');
        let notesLabel = document.createElement('label');
        notes.id = 'taskNotes';
        notes.setAttribute('name', 'notes');
        notesLabel.setAttribute('for', 'taskNotes');
        notesLabel.textContent = 'Task Notes: ';

        let notesContainer = document.createElement('div');
        notesContainer.classList.add('notes');
        notesContainer.appendChild(notesLabel);
        notesContainer.appendChild(notes);
        taskWindow.appendChild(notesContainer);
    }

    let submitBtn = document.createElement('button');

    submitBtn.textContent = 'Create Task';

    submitBtn.addEventListener('click', createTaskEvent);
    taskWindow.appendChild(submitBtn);
    
    


    


    container.style = 'display:none;'
    taskWindow.classList.add('create', 'task');

    
    container.appendChild(taskWindow);
    //dashBoard.appendChild(container)
    //wtf is going on

}
function createTaskEvent(event){
    event.preventDefault();     //prevents default form behavior i.e. sending the data to a server.

    let creationForm = document.querySelector('form.create');

    let createTaskFormData = new FormData(creationForm);
    console.log(createTaskFormData.get('title'));

    //basically I have to verify that all the data that I am receiving in the form is valid or not.
    //for that I need to decide on which data entries I want to make optional, which I want to make fard.
    //the logic for validating input will go in here I think most probably.

    console.log("  asd sdfas  ".trim());
    console.log(event.target.parentNode.parentNode.parentNode.querySelector('.main > .title').getAttribute('data-project'));
    //create all the vars of the name etc;
    let title = createTaskFormData.get('title');
    let project = event.target.parentNode.parentNode.parentNode.querySelector('.main > .title').getAttribute('data-project');
    let description = createTaskFormData.get('description');
    let dueDate = createTaskFormData.get('dueDate');
    let priority = createTaskFormData.get('priority');
    let notes = createTaskFormData.get('notes');

    //console.log(createTaskFormData.getAll());
    let checkPassed = 0;
    for (let item of createTaskFormData.values()){
        if(item.trim() === ''){
            console.log('Fill in all the fields!');
        }
        else{
            //console.log(item.trim());
           checkPassed += 1;
        }
    }

    if(checkPassed === 5){
        TaskManager.createTask(title, project ,description, dueDate , priority, notes);
        updateTaskBoard(project);

        //remove the popup form.
        let popupContainer = document.querySelector('.pop-container');
        while(popupContainer.firstChild){
            popupContainer.removeChild(popupContainer.firstChild);
        }
        popupContainer.style = 'display: none;';
    }


}




function addEventHandlers() {
   

    /* let projectList = document.querySelector('.project ul');
    while(projectList.firstChild){
        projectList.removeChild(projectList.firstChild);        //clear the previous list items.
    } */

    //updateProjectList();
    //leaving the above code as a comment because I dont know why this is even there in the first place, but if something breaks because of removing it, i left it so i can go back just in case ;)


    let defaultProject = document.querySelector('.default .title');
    defaultProject.addEventListener('click', e => updateTaskBoard(e.target.getAttribute('data-project')));
    // In the above line, I am adding the event listener for the default list beacause in the updateProjectList() function, the event handler for default project is not assigned. And this only needs to be called once cuz the 'default list' title can not be modified by the user.

    let popupContainer = document.querySelector('.pop-container');
    popupContainer.addEventListener('click', closePopup);



}

function closePopup(e){
    let popupContainer = document.querySelector('.pop-container');
    if(e.target === popupContainer){
        while(popupContainer.firstChild){
            popupContainer.removeChild(popupContainer.firstChild);
        }
        popupContainer.style = 'display: none;';
    }
    
}





function createUI(){
    initPage();

    updateProjectList();
    updateTaskBoard('none');
    addEventHandlers();
    
}









