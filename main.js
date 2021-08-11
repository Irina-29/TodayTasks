// cand toate taskurile sunt completate:
//     variabila care numara cate taskuri sunt in lista de abia dupa ce este inserat 1 task; 
//     cand variabila == 0 (nu mai sunt taskuri in lista):
//          -> taskurile din lista de completed sunt sterse 
//          -> mesaj congratulations

// sort by priority: option value devine numar de la 1 la 3 (cu switch statement) -> sortare


// method - using class for tasks
// class task {
//     constructor(name, priority) {
//         this.name = name;
//         this.priority = priority;
//     }
// }

// function addTask() {
//     var taskName = document.getElementById("floatingTextarea").value;
//     var taskPriority = document.getElementById("priorityOption").value;
//     var newTask = new task(taskName, taskPriority);
//     console.log(newTask);
// }


// method - using array of objects for tasks
var task = [], len = 0;

function addTask() {

    var taskName = document.getElementById("floatingTextarea").value;
    var taskPriority = document.getElementById("priorityOption").value;

    task.push({
        name: taskName,
        priority: taskPriority
    });

    var ul = document.getElementById("tasks-list");
    var li = document.createElement('li');
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    var div = document.createElement('div');
    div.classList.add("form-check");

    var input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    input.classList.add("form-check-input", "rounded-circle", "border-2");

    // inside div:
    // <input class="form-check-input rounded-circle border-2" type="checkbox" value="" id="check-task-1">
    // <label class="form-check-label" for="check-task-1"> </label>

    //input.appendChild(document.createElement(task[len].name));
    //div.appendChild(input);
    li.appendChild(div);
    ul.appendChild(li);

    console.log(task[len]);
    len++;
}