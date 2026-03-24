const inputValue=document.getElementById("inputText")
        const addToDo=document.getElementById("btnAdd")
        const toDoList=document.getElementById("ToDoList")
        const clearTodos=document.getElementById("btnClear")

class Stroge{
     static addToDoStroge(todoArr){
        let stroge=localStorage.setItem("todo",JSON.stringify(todoArr))//geçici hafızada tutmaya basladık şimdi sayfan silinmesini önleyen get metodunu yazalım
        return stroge;
     }
     static getStorage(){
        let getStrg=localStorage.getItem("todo")=== null ? []:JSON.parse(localStorage.getItem("todo"))
        return getStrg
     }
}


        let todoArr=Stroge.getStorage() //kullanıcının yazıdığı birden fazla görevi liste olarak tutmak için



addToDo.addEventListener("click",function(event){
    event.preventDefault()
    let id=todoArr.length+1
    let title=inputValue.value
    const todo=new ToDos(id,title)
    todoArr.unshift(todo)
    UI.alert("islem basarili")
    console.log(todoArr)
    UI.clearToDo()
    UI.displayTodos()
    //add to localstroge
    Stroge.addToDoStroge(todoArr);
})

//id nin içine gelen inputu ekleme kısmı

class ToDos{
    constructor(id,title){
        this.id=id;
        this.title=title;
    }//constructor oluşturduk, bunu bir nesnede oluşturmamız gerek
}
let result;
class UI{
    static displayTodos(){
           let result="";
            if(todoArr.length===0){
                toDoList.innerHTML="Liste Boş!"; //bu çalışmadı sonra bak
            }
            else{
            todoArr.forEach((item)=>{
                result += `
                <li class="flex justify-between border border-2 px-4 py-3 flex items-center font-bold">
                <span>${item.title}</span>
                <button class="text-red-400 remove"  data-id="${item.id}">Sil</button>
            </li>
                `
            });
            toDoList.innerHTML=result;
             }
            }


  static  clearToDo(){//normalde kullanabilmemiz için nesne oluşturmamız gerek. eğer nesne oluşturmak istemiyosak başına static ekleriz
clearTodos.addEventListener("click",function(){
todoArr=[];
Storage.addToDoStroge(todoArr)
UI.displayTodos()
})    
    }

    static alert(text){
        window.alert(text)
    }

    static removeToDo(){
        toDoList.addEventListener("click",function(event){
            if(event.target.classList.contains("remove"))//eğer classalr içerisinden remove diiye bir classı varsa içersine gir
            {
                event.target.parentElement.remove()//ana kapsayıcısnı sil
                let btnId=event.target.dataset.id;//finamik id sini dataset yardımıyla alıyıyorum. her bir array ögesinin kendisine ait bir idsi var, buunu belirtmiştik
                UI.removeArrayToDo(btnId)                                    //öğeyi arryimizden de silecek olan metot oluşturuyoruz bu metodu oluşturalim

            }

        })
    }
    static removeArrayToDo(id)
    {
        todoArr=todoArr.filter((item)=>item.id!== +id)//silinen OLMAYAN idleri geri dönder
        Storage.addToDoStroge(todoArr)
        UI.alert("todo silindi")
    UI.displayTodos();

    }
}



window.addEventListener("DOMContentLoaded",function(){//pencere yüklendiğinde çalışsın. bu şekilde yazmak daha sağlıklı metotları buryaa düz yazmaktan
    UI.removeToDo();
    UI.displayTodos();
    UI.clearToDo();
})
