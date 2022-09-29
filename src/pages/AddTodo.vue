<template>
  <div class="flex flex-col justify-center items-stretch space-y-3 h-screen">
    <div class="text-center text-xl font-semibold underline underline-offset-2">
      Daftar Tugas
    </div>
    <div class="text-center text-sm">Buat daftar tugas terpenting harianmu</div>
    <div>
      <label for="title" class="block font-bold">Nama tugasmu</label>
      <input
        v-model="inputValues.title"
        placeholder="Masukkan judulnya"
        id="title"
        name="title"
        class="bg-gray-50 p-2 border border-gray-200 rounded w-full"
        required
      />
    </div>
    <div>
      <label for="description" class="block font-bold">Deskripsi tugasmu</label>
      <textarea
        v-model="inputValues.description"
        placeholder="Masukkan deskripsinya"
        id="description"
        name="description"
        class="bg-gray-50 p-2 border border-gray-200 rounded w-full"
      />
    </div>
    <div class="flex flex-row justify-between items-center">
      <div>
        <label for="createdAt" class="block font-bold">Tanggal mulai</label>
        <input
          v-model="inputValues.createdAt"
          type="datetime-local"
          placeholder="Masukkan tanggal akhir"
          class="bg-gray-50 p-2 border border-gray-200 rounded w-full"
        />
      </div>

      <div>
        <label for="endAt" class="block font-bold">Tanggal akhir</label>
        <input
          v-model="inputValues.endAt"
          type="datetime-local"
          placeholder="Masukkan tanggal akhir"
          class="bg-gray-50 p-2 border border-gray-200 rounded w-full"
        />
      </div>
    </div>
    <button
      v-on:click="inputSubmitted"
      class="bg-blue-500 p-2 active:translate-y-1 text-white"
    >
      Tambah
    </button>
    <button
      v-on:click="goToTodoList"
      class="p-2 bg-green-500 text-white active:translate-y-1"
    >
      Menuju daftar tugasmu
    </button>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useTodoStore from '../store/todo.store'
import Todo from '../types/Todo'

const router = useRouter()
const todoStore = useTodoStore()

const inputValues = ref<Todo>({
  id: nanoid(),
  createdAt: new Date(),
  isCompleted: false,
})

function clearInput() {
  inputValues.value = {
    createdAt: new Date(),
    id: nanoid(),
    isCompleted: false,
  }
}

function inputSubmitted(e: MouseEvent) {
  if (inputValues.value.title) {
    todoStore.addTodo(inputValues.value)
    console.log('Todo value ' + inputValues.value)
    clearInput()
    alert('Sukses tambah data')
  } else {
    alert('Input tidak boleh kosong')
  }
}

function goToTodoList() {
  router.push('/daftar-tugasku')
}
</script>
