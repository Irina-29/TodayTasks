// cand toate taskurile sunt completate:
//     variabila care numara cate taskuri sunt in lista de abia dupa ce este inserat 1 task; 
//     cand variabila == 0 (nu mai sunt taskuri in lista):
//          -> taskurile din lista de completed sunt sterse 
//          -> mesaj congratulations

// sort by priority: option value devine numar de la 1 la 3 (cu switch statement) -> sortare

var tasks = [];

var len = 0;

function addTask() {
    var taskName = document.getElementById("floatingTextarea").value;
    var taskPriority = document.getElementById("priorityOption").value;
    tasks.push({
        name: taskName,
        priority: taskPriority
    });
    len++;
}