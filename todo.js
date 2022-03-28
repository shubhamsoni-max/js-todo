let todo_input = document.querySelector(".todo-input");
let add_todo_btn = document.querySelector("#push");
let todo_list = document.querySelector("#tasks");
let update_todo_btn=  document.querySelector("#update");

let todoArr = [];
const showTodo = (arr) => {
  todo_list.innerHTML = "";
  arr.forEach((item) => {
    todo_list.insertAdjacentHTML(
      "beforeend",
      `<div class="task" id="${item.id}">
          <span class="${item.id}"  id="taskname">
              ${item.todo_name}
           </span>
           <span class="buttons">
           <button class="delete" onclick="deleteItem(${item.id})"> Delete</button>
           <button class="edit" onclick="editItem(${item.id})">Edit</botton>
           </span>
           
       </div>`
    );
  });
};

const deleteItem = (id)=>{
 todoArr = todoArr.filter((item)=> item.id != id);
 showTodo(todoArr);
}
let updating_todo_id = null;
const editItem = (id)=>{
  todoArr.forEach((todo)=>{
    if(todo.id == id){
      todo_input.value = todo.todo_name;
      todo_list.style.display="none";
      add_todo_btn.style.display = "none";
      update_todo_btn.style.display="inline";
      updating_todo_id = id;
    }
  })
 }
add_todo_btn.onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    let todo_id = new Date().getTime();
    todoArr.push({ todo_name: todo_input.value, id: todo_id });
    showTodo(todoArr);
    todo_input.value="";

  }
};
 const updateTodo = ()=>{
  todoArr.forEach((todo)=>{
    if(todo.id == updating_todo_id){
      todo.todo_name = todo_input.value;
      todo_list.style.display="block";
      add_todo_btn.style.display = "inline";
      update_todo_btn.style.display="none";
      updating_todo_id = null;
      showTodo(todoArr);
      todo_input.value="";
    }
  })
 }

 