<template>
  <div>Ini adalah daftar todo</div>
  <div v-if="todoStore.checkTodoIsAvailable" class="flex flex-col">
    <div
      class="rounded shadow-lg p-2 flex flex-col space-y-1"
      v-for="(todo, index) in todoStore.getTodos"
      :key="index"
    >
      <div class="flex flex-row justify-between">
        <div class="text-md font-bold">{{ todo.title }}</div>
        <div class="text-md text-red-300 font-bold">
          {{ Intl.DateTimeFormat('en-ID').format(todo.endAt) }}
        </div>
      </div>

      <hr class="border border-t-0 border-gray-100" />

      <div class="text-sm">{{ todo.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useTodoStore from '../store/todo.store'
const todoStore = useTodoStore()
</script>
