interface Todo {
  readonly id: string
  readonly title?: string
  readonly description?: string
  readonly createdAt: Date
  readonly endAt?: Date
  readonly isCompleted: boolean
}

export default Todo
