export {storageManager, arrayRef };
import { Task } from "./internal";


let storageManager = function(){
    let arraysOfAllTasks = {
        'unsorted' : [],
        'none' : [],
    }; //{"car": 1},2,{"lol": 4},5

    let sortArray = function(){
        
        arraysOfAllTasks['unsorted'].forEach((task) => {
            arraysOfAllTasks[task.getProject()].push(task);
        })

        arraysOfAllTasks['unsorted'] = [];

    }
    
    let reloadDataFromStorage = function(){
        if(!localStorage.getItem('database array')){
            console.log("The local storage is emptyyy")
            arraysOfAllTasks = {
                'unsorted' : [],
                'none' : [],
                'house chores' : [new Task('bobo task')],
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

