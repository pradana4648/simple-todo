import{b as e}from"./index.abd6f775.js";const d=e("todo",{state:()=>({todos:[]}),getters:{getTodos:o=>o.todos,checkTodoIsAvailable:o=>o.todos.length>0,filterCompletedTodos:o=>o.todos.filter(t=>t.isCompleted)},actions:{addTodo(o){this.todos.push(o)}}});export{d as u};
