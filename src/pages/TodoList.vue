<template>
  <div class="text-center font-semibold text-2xl underline underline-offset-2">
    Daftar Tugas
  </div>
  <div class="flex flex-col items-center">
    <div v-if="todoStore.checkTodoIsAvailable" class="flex flex-col">
      <div
        class="rounded shadow-lg p-2 flex flex-col space-y-1"
        v-for="(todo, index) in todoStore.getTodos"
        :key="index"
      >
        <div class="flex flex-row justify-between">
          <div class="text-md font-bold">{{ todo.title }}</div>
          <div class="text-md text-red-300 font-bold">
            {{ todo.endAt && Intl.DateTimeFormat('en-ID').format(todo.endAt) }}
          </div>
        </div>

        <hr class="border border-t-0 border-gray-100" />

        <div class="text-sm">{{ todo.description }}</div>
      </div>
    </div>
    <div v-else class="w-1/8">
      <div class="text-sm my-5 text-center">Daftar tugasmu masih kosong</div>
      <button
        v-on:click="goToAddTodo"
        class="p-2 bg-green-500 text-white w-full"
      >
        Buat daftar tugasmu disini
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import useTodoStore from '../store/todo.store'
const todoStore = useTodoStore()

const router = useRouter()

function goToAddTodo() {
  router.push('/buat-daftar-tugas')
}
</script>
