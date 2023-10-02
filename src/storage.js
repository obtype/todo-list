export {storageManager, arrayRef };
import { Task } from "./internal";


let storageManager = function(){
    let arraysOfAllTasks = {
        'unsorted' : [],
        'none' : [],
    }; //{"car": 1},2,{"lol": 4},5

    let sortArray = function(){

        arraysOfAllTasks['unsorted'].forEach((task) => {
            arraysOfAllTasks[task.getProject()].push(task);     //This will give an error if the project that you  are assigning this task to, does not exist. This can be fixed by forcefully creating a project (over here) when this exception is thrown, or I can just ignore it for now and create the project explicitly (using the TaskManager.createProject(); ),  before I assign tasks to it.
        })

        arraysOfAllTasks['unsorted'] = [];

    }
    
    let reloadDataFromStorage = function(){
        if(!localStorage.getItem('database array')){
            console.log("The local storage is emptyyy")
            arraysOfAllTasks = {
                'unsorted' : [],
                'none' : [],
                'house chores' : [new Task('bobo task', 'house chores')],
            };
        }
        else{
            arraysOfAllTasks = JSON.parse(localStorage.getItem('database array'));

            for(let tasklist in arraysOfAllTasks){
                arraysOfAllTasks[tasklist].forEach((task) => {
                    Object.assign(Object.getPrototypeOf(task), Task.prototype);
                })
            }

           /*  arraysOfAllTasks.forEach((task) => {
                Object.assign(Object.getPrototypeOf(task), Task.prototype);
            }) */
        }
    }

    let saveDataToStorage = function(){
        if(arraysOfAllTasks['unsorted'].length !== 0){
            
            console.log('This fucker shouldnt be running fml')
            //figure out why tf this if statement is running smh.
            sortArray();
        }



        localStorage.setItem('database array', JSON.stringify(arraysOfAllTasks));
    }


    reloadDataFromStorage();
    //saveDataToStorage();
    return{
        arraysOfAllTasks,
        saveDataToStorage,
        
    }


}();

let arrayRef = storageManager.arraysOfAllTasks;


