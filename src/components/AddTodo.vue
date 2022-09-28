<template>
  <div class="flex flex-col space-y-3">
    <div>
      <label for="title" class="block font-bold">Nama daftar tugas</label>
      <input
        v-model="inputValues.title"
        placeholder="Masukkan nama daftar tugas anda"
        id="title"
        name="title"
        class="bg-gray-50 p-2 border border-gray-200 rounded w-full"
        required
      />
    </div>
    <div>
      <label for="description" class="block font-bold"
        >Deskripsi daftar tugas</label
      >
      <textarea
        v-model="inputValues.description"
        placeholder="Masukkan deskripsi daftar tugas anda"
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
          id="createdAt"
          name="createdAt"
          class="bg-gray-50 p-2 border border-gray-200 rounded w-full"
        />
      </div>

      <div>
        <br />
        <hr class="border border-t-0 w-4 border-black" />
      </div>

      <div>
        <label for="endAt" class="block font-bold">Tanggal akhir</label>
        <input
          v-model="inputValues.endAt"
          type="datetime-local"
          placeholder="Masukkan tanggal akhir"
          id="endAt"
          name="endAt"
          class="bg-gray-50 p-2 border border-gray-200 rounded w-full"
        />
      </div>
    </div>
    <button
      v-on:click="inputSubmitted"
      class="bg-blue-300 p-2 active:translate-y-1"
    >
      Tambah
    </button>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid'
import { ref } from 'vue'
import useTodoStore from '../store/todo.store'
import Todo from '../types/Todo'

const todoStore = useTodoStore()
const inputValues = ref<Todo>({
  title: '',
  description: '',
  createdAt: new Date(),
  endAt: new Date(),
  id: nanoid(),
  isCompleted: false,
})

function clearInput() {
  inputValues.value = {
    title: '',
    description: '',
    createdAt: new Date(),
    endAt: new Date(),
    id: nanoid(),
    isCompleted: false,
  }
}

function inputSubmitted(e: MouseEvent) {
  todoStore.addTodo(inputValues.value)
  console.log('Todo value ' + inputValues.value)
  clearInput()
  alert('Sukses tambah data')
}
</script>
