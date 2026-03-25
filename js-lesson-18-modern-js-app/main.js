const inputValue = document.getElementById("inputText");
const addToDo = document.getElementById("btnAdd");
const toDoList = document.getElementById("ToDoList");
const clearTodos = document.getElementById("btnClear");

// Sınıf ismini Storage olarak düzelttim (Daha standart bir isim)
class Storage {
    static addToDoStorage(todoArr) {
        localStorage.setItem("todo", JSON.stringify(todoArr));
    }
    static getStorage() {
        return localStorage.getItem("todo") === null ? [] : JSON.parse(localStorage.getItem("todo"));
    }
}

let todoArr = Storage.getStorage();

const {title}=todoArr[0]
console.log(title)

class ToDos {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}

class UI {
    static displayTodos() {
        let result = "";
        if (todoArr.length === 0) {
            toDoList.innerHTML = "<p class='text-center'>Liste Boş!</p>";
        } else {
            todoArr.map((item) => {//bunu da modern js ile öğrendik
                result += `
                <li class="flex justify-between border-2 px-4 py-3 items-center font-bold mb-2">
                    <span>${item.title}</span>
                    <button class="text-red-400 remove" data-id="${item.id}">Sil</button>
                </li>`;
            });
            toDoList.innerHTML = result;
        }
    }

    static clearToDo() {
        // Event listener burada kalabilir ama dışarıda bir kez çağrılmalı
        todoArr = [];
        Storage.addToDoStorage(todoArr);
        UI.displayTodos();
        UI.alert("Tüm liste temizlendi");
    }

    static alert(text) {
        console.log(text); // window.alert yerine console veya custom alert daha akıcıdır
    }

    static removeToDo() {
        toDoList.addEventListener("click", (event) => {
            if (event.target.classList.contains("remove")) {
                let btnId = event.target.dataset.id;
                UI.removeArrayToDo(btnId);
            }
        });
    }

    static removeArrayToDo(id) {
        // +id kullanarak string gelen id'yi number'a çeviriyoruz
        todoArr = todoArr.filter((item) => item.id !== +id);
        Storage.addToDoStorage(todoArr);
        UI.displayTodos();
    }
}

// OLAY DİNLEYİCİLERİ (Event Listeners)

addToDo.addEventListener("click", (event) => {
    event.preventDefault();
    if (inputValue.value.trim() === "") return UI.alert("Lütfen bir görev girin!");

    let id = Date.now();
    let title = inputValue.value;
    const todo = new ToDos(id, title);
    todoArr=[...todoArr,todo]//önceden bunu unshift veya push metodu ile yapıyorduk artık modern js uygun oldu
    Storage.addToDoStorage(todoArr);
    UI.displayTodos();
    inputValue.value = ""; // Inputu temizle
});

// Temizle butonu için dinleyici
clearTodos.addEventListener("click", () => {
    UI.clearToDo();
});

window.addEventListener("DOMContentLoaded", () => {
    UI.removeToDo();
    UI.displayTodos();
});