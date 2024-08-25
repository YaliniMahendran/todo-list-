function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();
    
    if (todoText === '') {
        return;
    }
    
    const todoList = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    
    const textNode = document.createTextNode(todoText);
    listItem.appendChild(textNode);
    
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.onclick = function () {
        listItem.style.textDecoration = 'line-through';
        listItem.style.color = '#aaa';
    };
    listItem.appendChild(doneButton);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        todoList.removeChild(listItem);
    };
    listItem.appendChild(deleteButton);
    
    todoList.appendChild(listItem);
    input.value = '';
}