import {taskInterface} from './exerciseThree';

class exercise implements taskInterface{
    as_tasks: Array<string> = [];

    addTask(task:string):number{
        let i_numberOfStrings: number;
        this.as_tasks.push(task);
        console.log("Task inserted");
        i_numberOfStrings = this.as_tasks.length;
        console.log(i_numberOfStrings + " strings in tasks");
        return i_numberOfStrings;
    }

    listAllTasks(){
        for(let i = 0; i< this.as_tasks.length; i++){
            console.log("Task " + (i+1) + ": " + this.as_tasks[i]);
        }
    }

    deleteTask(task:string){
        let i_indexOfTask;
        i_indexOfTask = this.as_tasks.indexOf(task);
    
        this.as_tasks = this.as_tasks.slice(i_indexOfTask, 1);
    
        console.log(task + " has been removed");
        return this.as_tasks.length;
    }
}

let E_exercise:exercise = new exercise();

E_exercise.as_tasks = ["one", "two", "three", "four"];
E_exercise.addTask("five");
E_exercise.listAllTasks();
E_exercise.deleteTask("three");