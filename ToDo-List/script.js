let todo_array = JSON.parse(localStorage.getItem('todoList')) || [];
  
render_page();

function render_page(){
    let todo_page_html = ``;

    for(let i=0; i<todo_array.length; i++){
        const todo_name = todo_array[i].name;
        const todo_date = todo_array[i].date;

        const html = `
            <div>${todo_name}</div>
            <div>${todo_date}</div>
            <button onclick="
                todo_array.splice(${i},1);
                render_page();
                saveToStorage();    
            " class="delete-button">Delete</button>
        `;

        todo_page_html += html;
    }
    document.querySelector('.js-todo-page-html').innerHTML = todo_page_html;
}

function addToDo(){
    const name = document.querySelector('.js-todo-name').value;
    document.querySelector('.js-todo-name').value = '';

    const date = document.querySelector('.js-todo-date').value;
    document.querySelector('.js-todo-date').value = null;

    todo_array.push({name,date});
    saveToStorage();

    render_page();
}

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todo_array));
  }