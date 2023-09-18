export {storageManager, arrayRef };
import { Task } from "./internal";




let storageManager = function(){
    let arrayOfAllTasks = []; //{"car": 1},2,{"lol": 4},5
    //console.log("What im sending in: ", arrayOfAllTasks);
    let reloadDataFromStorage = function(){
        arrayOfAllTasks = JSON.parse(localStorage.getItem('database array'));
        arrayOfAllTasks.forEach((task) => {
            Object.assign(Object.getPrototypeOf(task), Task.prototype);
        })
    }

    let saveDataToStorage = function(){
        localStorage.setItem('database array', JSON.stringify(arrayOfAllTasks));
        //console.log(localStorage.setItem('database array', "fuck you nigga, work it."));
    }

   /*  const addToStorage = function(task){
        arrayOfAllTasks.push(task);
        saveDataToStorage();
        //console.log("data that was saved to storage successfully:", reloadDataFromStorage());
    }
 */
    //saveDataToStorage();
    //console.log("testing",reloadDataFromStorage());

    //console.log("What im getting out:", localStorage.getItem('database array'))
    //console.log("What im getting out but parsed:",JSON.parse(localStorage.getItem('database array')))


    reloadDataFromStorage();
    //saveDataToStorage();
    return{
        arrayOfAllTasks,
        saveDataToStorage,
        reloadDataFromStorage,
    }


}();

let arrayRef = storageManager.arrayOfAllTasks;











