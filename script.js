const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function() {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if (inputTask.value === "") {
        alert("Please enter a task");
    } else {
        document.querySelector('#task-container').appendChild(task);
        inputTask.value = "";
    }

    checkButton.addEventListener('click', function() {
        checkButton.parentElement.style.textDecoration = "line-through";
        checkButton.disabled = true; // Disable the check button after marking the task
    });

    deleteButton.addEventListener('click', function(e) {
        let target = e.target;
        if (target.tagName === "I") { // Check if the click was on the icon inside the button
            target.parentElement.parentElement.remove();
        } else {
            target.parentElement.remove();
        }
    });
    inputTask.value = "";
});
