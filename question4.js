//the array to store tasks
let tasks = [];
let currentId = 1;

//defining function addTask to add new task
function addTask(name, description) {
    const task = { id: currentId++, name, description };
    tasks.push(task);
    renderTasks();
    console.log(`Task ${task.id} added successfully!`);
}

//defining the function that renders the tasks
function renderTasks() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${task.name}</strong><br>
                <span>${task.description}</span>
            </div>
            <div class="buttons">
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

//the function that handles form submission
document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('todo-description').value;
    if (title && description) {
        addTask(title, description);
        document.getElementById('todo-title').value = '';
        document.getElementById('todo-description').value = '';
    } else {
        alert('Please fill in both title and description.');
    }
});

//defining the function editTask
function editTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        const newTitle = prompt('Enter new title:', task.name);
        const newDescription = prompt('Enter new description:', task.description);
        if (newTitle !== null && newDescription !== null) {
            task.name = newTitle;
            task.description = newDescription;
            renderTasks();
            console.log(`Task ${id} updated successfully!`);
        }
    }
}

//defining the function deleteTask
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
    console.log(`Task ${id} deleted successfully!`);
}

renderTasks();