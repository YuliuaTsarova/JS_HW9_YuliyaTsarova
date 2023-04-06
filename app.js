"use strict";

function createToDoList() {
    const input = document.querySelector('.input')
    const clearButton = document.querySelector('.todo__clear')
    const dateElement = document.getElementById("date");

    input.addEventListener('change', createTask)
    clearButton.addEventListener('click', deleteTask)

    //  Показать дату
    const options = { weekday: "long", month: "short", day: "numeric", year: 'numeric' };
    const today = new Date();

    dateElement.innerHTML = today.toLocaleDateString("ru-RU", options);

    function createTask(event) {
        const value = event.target.value
        // console.log(value)
        if (!value.trim()) return alert("Вы ничего не написали") //Метод trim() удаляет пробельные символы с начала и конца строки.

        const taskContainer = document.createElement('div')
        taskContainer.classList.add('todo__item')

        const checkbox = document.createElement('input')
        checkbox.setAttribute(`type`,'checkbox')
        checkbox.className =`todo__checkbox`

        const task = document.createElement('span')
        task.classList.add('todo__text')
        task.textContent = value

        const trash = document.createElement('img')
        trash.setAttribute('src', ('img/edit1.png'))
        trash.classList.add('todo__trash')

        taskContainer.append(checkbox, task, trash)

        const todo__content = document.querySelector('.todo__content')
        todo__content.append(taskContainer)

        input.value = "" // зачистили поле ввода

        checkbox.addEventListener('click', checkTask) //
        trash.addEventListener('click', editTask)
    }
    function checkTask() {
        this.nextSibling.classList.toggle('lineThrough')

    }
    function editTask(event) {
         event.target.innerHTML = prompt("Изменить задачу", event.target.textContent)
    }

    function deleteTask() {  // зачищаем пустой строкой контеинер
        const deleteElements = document.querySelector('.todo__content')
        deleteElements.innerHTML = ''
    }

}
createToDoList() 