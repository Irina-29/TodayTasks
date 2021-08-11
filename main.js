// cand toate taskurile sunt completate:
//     variabila care numara cate taskuri sunt in lista de abia dupa ce este inserat 1 task; 
//     cand variabila == 0 (nu mai sunt taskuri in lista):
//          -> taskurile din lista de completed sunt sterse 
//          -> mesaj congratulations

// sort by priority: option value devine numar de la 1 la 3 (cu switch statement) -> sortare


// method 1 - using class for tasks
class task {
    constructor(name, priority) {
        this.name = name;
        this.priority = priority;
    }
}

function addTask() {
    var taskName = document.getElementById("floatingTextarea").value;
    var taskPriority = document.getElementById("priorityOption").value;
    var newTask = new task(taskName, taskPriority);
    console.log(newTask);
}


// method 2 - using array of objects for tasks
// var task = [];

// var len = 0;

// function addTask() {
//     var taskName = document.getElementById("floatingTextarea").value;
//     var taskPriority = document.getElementById("priorityOption").value;
//     task.push({
//         name: taskName,
//         priority: taskPriority
//     });
//     var li = document.createElement('li');
//     li = task[len].name;
//     document.getElementById("tasks-list").innerHTML = li;
//     console.log(task[len]);
//     len++;
// }