

let as_tasks: Array<string>;


function addTask(task:string):number{
    let i_numberOfStrings: number;
    as_tasks.push(task);
    console.log("Task inserted");
    i_numberOfStrings = as_tasks.length;
    console.log(i_numberOfStrings + " strings in tasks");
    return i_numberOfStrings;
}

function listAllTasks(){
    for(let i = 0; i< as_tasks.length; i++){
        console.log("Task " + (i+1) + ": " + as_tasks[i]);
    }
}

function deleteTask(task:string){
    let i_indexOfTask;
    i_indexOfTask = as_tasks.indexOf(task);

    as_tasks = as_tasks.slice(i_indexOfTask, 1);

    console.log(task + " has been removed");
    return as_tasks.length;
}