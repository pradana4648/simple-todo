import { defineStore } from 'pinia'
import Todo from '../types/Todo'

interface State {
  todos: Todo[]
}

const useTodoStore = defineStore('todo', {
  state: (): State => ({
    todos: [],
  }),

  getters: {
    getTodos: (state) => state.todos,
    checkTodoIsAvailable: (state) => state.todos.length > 0,
    filterCompletedTodos: (state) =>
      state.todos.filter((todo) => todo.isCompleted),
  },
  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo)
    },
  },
})

export default useTodoStore
