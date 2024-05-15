//Tüm elementleri Seçmek

const form = document.querySelector("#todoAddForm");  //all koymasan da olur buna
const addInput = document.querySelector("#todoName");  // Yapılacakların yazıldığı input


const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0]; // İlk card-body, uyarılar için
const secondCardBody = document.querySelectorAll(".card-body")[1];  // İkinci card-body, yapılacakların listelendiği alan
const clearButton = document.querySelector("#clearButton"); //Tüm yapılacakları silmek için buton

const filterInput = document.querySelector("#todoSearch"); // Yapılacakları filtrelemek için input
let todos = [];   // Yapılacakları tutacak olan dizi
runEvents();



// Sayfa yüklendiğinde çalışacak olan fonksiyon
function pageLoaded() {
    checkToDosFromStorage();    // Yerel depolamadan (localStorage) yapılacakları kontrol et
    todos.forEach(function (todo) {
        addTodoToUI(todo);   // Her bir yapılacak öğesini arayüze ekle
    });
}

// Tüm olay dinleyicilerini başlatan fonksiyon
function runEvents() {
    form.addEventListener("submit", addTodo);                         // Form gönderildiğinde yeni yapılacak eklemek için
    document.addEventListener("DOMContentLoaded", pageLoaded);       // Sayfa yüklendiğinde yapılan işlemler
    secondCardBody.addEventListener("click", removeToDoToUI);       // Bir yapılacak öğesini listeden kaldırmak için
    clearButton.addEventListener("click", allTodosDeleted);        // Tüm yapılacakları silmek için
    filterInput.addEventListener("keyup", filter);                // Yapılacakları filtrelemek için
}
// Yapılacakları filtrelemek için fonksiyon
function filter(e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const toDoListesi = document.querySelectorAll(".list-group-item");

    if (toDoListesi.length > 0) {
        toDoListesi.forEach(function (todo) {
            if (todo.textContent.toLowerCase().includes(filterValue)) {
                todo.setAttribute("style", "display:block;");   // Filtrelenenleri göster
            }
            else {
                todo.setAttribute("style", "display:none !important ;");   // Diğerlerini gizle
            }
        });
    }
    else {
        showAlert("warning", "Filtreleme yapılacak todo yok!");
    }
}
// Tüm yapılacakları silmek için fonksiyon
function allTodosDeleted() {
    const toDoListesi = document.querySelectorAll(".list-group-item");
    if (toDoListesi.length > 0) {
        //ekrandan silme
        toDoListesi.forEach(function (todo) {
            todo.remove();
        });
        //storagedan silme
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "Başarılı bir şekilde  todolar silindi...");
    }


    else {
        showAlert("warning", "Liste boş");
    }
}
// Bir yapılacak öğesini listeden kaldırmak için fonksiyon
function removeToDoToUI(e) {
    if (e.target.className === "fa fa-remove") {
        //Ekrandan silme
        const todo = e.target.parentElement.parentElement;
        todo.remove();

        //Storagedan silme
        removeToDoToStorage(todo.textContent);
        showAlert("success", "toDo başarıyla silindi");
    }
}
// Yerel depodan bir yapılacak öğesini silmek için fonksiyon
function removeToDoToStorage(removeToDo) {
    checkToDosFromStorage();
    todos.forEach(function (todo, index) {
        if (todo == removeToDo) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));

}
// Yeni bir yapılacak öğe eklemek için fonksiyon
function addTodo(e) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        showAlert("warning", "Lütfen boş bırakmayın");
    }
    else {
        //Arayüze Ekleme;
        addTodoToUI(inputText);
        showAlert("success", "toDo başarıyla eklendi");
        addToDoStorage(inputText);
    }
    //storage ekleme
    e.preventDefault(); // Formun normal davranışını engelle

}

function addTodoToUI(newToDo) {

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between ";
    li.textContent = newToDo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";
    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);
    addInput.value = "";


}
function addToDoStorage(newToDo) {
    todos = []; // Önce todos dizisini sıfırla
    checkToDosFromStorage(); // Sonra localStorage'dan veriyi çek
    todos.push(newToDo); // Yeniden eklemek yerine direkt olarak ekleyebilirsin
    localStorage.setItem("todos", JSON.stringify(todos));
}
function checkToDosFromStorage() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos === null || storedTodos === undefined) {
        todos = [];
    } else {
        try {
            // JSON verisinin sonlandığını kontrol et
            if (storedTodos.trim() === "") {
                todos = [];
            } else {
                todos = JSON.parse(storedTodos);
            }
        } catch (error) {
            console.error("JSON parse error:", error);
            todos = [];
        }
    }
}

function showAlert(type, message) {
    const div = document.createElement("div");
    div.className = "alert alert-" + type;
    div.textContent = message;
    firstCardBody.appendChild(div);

    setTimeout(function () {    //2,5 saniye sonra uyarıları kapat
        div.remove();
    }, 2500);
}