let todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
console.log(todoList)
window.onload = function(){
    drawTodoList(document.getElementsByClassName('todo-list')[0], todoList);
}

function addTodo(){
    //추가할 일정요소 만들기
    function getTodoNode(){
        //내가 입력한 값 가지고오기
        const todoTitle = document.getElementById('search-input').value;

        //할일 입력되지 않았다면 함수를 끝낸다
        if(todo.replace(/ /g,"") === '')
            return;

        todoList.push({
            title : todo,
            date : new Date()
        })

        document.getElementById('search-input').value = '';
        localStorage.setItem('todoList', JSON.stringify(todoList))
        drawTodoList(document.getElementsByClassName('todo-list-view')[0], todoList);
    }

function drawTodoList(parent, list){
    $(parent).empty();

    for (let unit of list) {
        const toDoLi = document.createElement('li');
    }
}
}