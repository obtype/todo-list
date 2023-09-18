export {storageManager, arrayRef };
import { Task } from "./internal";


let storageManager = function(){
    let arrayOfAllTasks = []; //{"car": 1},2,{"lol": 4},5
    
    let reloadDataFromStorage = function(){
        if(!localStorage.getItem('database array')){
            arrayOfAllTasks = [];
        }
        else{
            arrayOfAllTasks = JSON.parse(localStorage.getItem('database array'));
            arrayOfAllTasks.forEach((task) => {
                Object.assign(Object.getPrototypeOf(task), Task.prototype);
            })
        }
    }

    let saveDataToStorage = function(){
        localStorage.setItem('database array', JSON.stringify(arrayOfAllTasks));
    }


    reloadDataFromStorage();
    //saveDataToStorage();
    return{
        arrayOfAllTasks,
        saveDataToStorage,
        
    }


}();

let arrayRef = storageManager.arrayOfAllTasks;











