export {storageManager, arrayRef };
import { Task } from "./task";




let storageManager = function(){
    let arrayOfAllTasks = [{"car": 1},2,{"lol": 4},5];
    //console.log("What im sending in: ", arrayOfAllTasks);
    const reloadDataFromStorage = function(){
        arrayOfAllTasks = JSON.parse(localStorage.getItem('database array'));
        arrayOfAllTasks.forEach((task) => {
            //Object.assign(Object.getPrototypeOf(task), Task.prototype);
        })
    }

    const saveDataToStorage = function(){
        localStorage.setItem('database array', JSON.stringify(arrayOfAllTasks));
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
        //addToStorage,
    }


}();

let arrayRef = storageManager.arrayOfAllTasks;











