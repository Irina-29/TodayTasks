var task = [], len = 0, checkTask = 0;

//  <span class="badge rounded-pill bg-danger fs-6">must</span>
//  <span class="badge rounded-pill bg-warning fs-6">should</span>
//  <span class="badge rounded-pill bg-info fs-6">could</span>

function addTask() {

    checkTask++;

    var taskName = document.getElementById("floatingTextarea").value;
    var taskPriority = document.getElementById("priorityOption").value;

    task.push({
        name: taskName,
        priority: taskPriority
    });

    // checkPriority(taskPriority);

    var ul = document.getElementById("tasks-list");

    var li = document.createElement('li');
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    var div = document.createElement('div');
    div.classList.add("form-check");

    var checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", checkTask);
    checkbox.classList.add("form-check-input", "rounded-circle", "border-2");

    var label = document.createElement('label');
    label.htmlFor = checkTask;
    label.classList.add("form-check-label");

    // li.appendChild(badge);
    label.appendChild(document.createTextNode(task[len].name));
    div.appendChild(label);
    div.appendChild(checkbox);
    li.appendChild(div);
    ul.appendChild(li);

    console.log(task[len]);
    len++;
}

// function checkPriority(taskPriority) {
//     if (taskPriority == "must") {
//         var badge = document.createElement('span');
//         badge.classList.add("badge", "rounded-pill", "bg-danger", "fs-6");
//         badge.appendChild(document.createTextNode("must"));
//     }
// }