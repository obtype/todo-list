export {storageManager, arrayRef };
import { Task } from "./internal";


let storageManager = function(){
    let arraysOfAllTasks = {
        'unsorted' : [],
        'none' : [],
    }; //{"car": 1},2,{"lol": 4},5

    let sortArray = function(){
        arraysOfAllTasks['unsorted'].forEach((task) => {
            ///array of all tasks has to be an object with key value pairs of
            //'project name' : 'array of its taks' 
            console.log(task);
            console.log(task.getProject());
            arraysOfAllTasks[task.getProject()].push(task);
            //arraysOfAllTasks['unsorted'].shift();        //this might be prone to errors when it runs. maybe a conflict between forEach while simultaneously changing the array size by removing elements. I am retarded for writing this line of code and wasting my time and effort researching how to write it smh fr.


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


