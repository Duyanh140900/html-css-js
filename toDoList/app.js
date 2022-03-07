var input = document.querySelector('input');
var button = document.querySelector('button');
var form = document.querySelector('form');
var todos = document.querySelector('.todos')


form.addEventListener('submit', function(e){
    e.preventDefault();
    let val = input.value.trim();
    if(val){
        addTodo({
            text: val,
            status: ''
        })
        saveTodoList();
    }
    input.value = ''
})

function addTodo(element){
    var li = document.createElement('li');
    li.innerHTML = `
    <span>${element.text}</span>
    <i class="fa-solid fa-trash-can"></i>
    `
    if(element.status === 'completed'){
        li.setAttribute('class','completed')
    }

    li.addEventListener('click', function(){
        this.classList.toggle('completed')
        saveTodoList();
    })

    li.querySelector('i').addEventListener('click', function(){
        this.parentElement.remove();
        saveTodoList();
    })
    todos.appendChild(li);
}

function saveTodoList(){
    let liList = document.querySelectorAll('li');

    let listStorage = []

    liList.forEach(function(item){
        let text = item.querySelector('span').innerText;
        let status = item.getAttribute('class')

        listStorage.push({
            text,
            status
        })
    })
    localStorage.setItem('liList', JSON.stringify(listStorage))
}

function init(){
    let data = JSON.parse(localStorage.getItem('liList'));
    data.forEach(function(item){
        addTodo(item);
    })
}

init();