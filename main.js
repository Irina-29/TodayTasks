var task = [], len = 0, checkTask = 0;

function addTask() {

    checkTask++;

    var taskName = document.getElementById("floatingTextarea").value;
    var taskPriority = document.getElementById("priorityOption").value;

    task.push({
        name: taskName,
        priority: taskPriority
    });

    var badge = checkPriority(taskPriority);

    var ul = document.getElementById("tasks-list");

    var li = document.createElement('li');
    li.setAttribute("id", "item-list");
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

    ul.appendChild(li);
    li.appendChild(div);
    div.appendChild(checkbox);
    div.appendChild(label);
    label.appendChild(document.createTextNode(task[len].name));
    li.appendChild(badge);

    checkbox.addEventListener("click", function() {completeTask(li, taskName)});

    len++;
}

function checkPriority(taskPriority) {
    if (taskPriority == "must") {
        var badge = document.createElement('span');
        badge.classList.add("badge", "rounded-pill", "bg-danger", "fs-6");
        badge.appendChild(document.createTextNode("must"));
        return badge;
    }
    if (taskPriority == "should") {
        var badge = document.createElement('span');
        badge.classList.add("badge", "rounded-pill", "bg-warning", "fs-6");
        badge.appendChild(document.createTextNode("should"));
        return badge;
    }
    if (taskPriority == "could") {
        var badge = document.createElement('span');
        badge.classList.add("badge", "rounded-pill", "bg-info", "fs-6");
        badge.appendChild(document.createTextNode("could"));
        return badge;
    }
}

function completeTask(element, task) {
    
    var ul = document.getElementById("completed-list");

    var li = document.createElement('li');
    li.classList.add("completed-item", "text-decoration-line-through");

    ul.appendChild(li);
    li.appendChild(document.createTextNode(task));

    element.remove();
    len--;

    checkLength();
}

function checkLength() {
    if (len == 0) {
        $("#message-modal").modal('show');
        $('#message-modal').on('hidden.bs.modal', function () {
            location.reload();
        })
    }
}

//error when priority value is null