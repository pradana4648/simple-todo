<template>
  <div class="flex flex-col justify-center items-center text-center h-screen">
    <div class="text-xl font-bold">Selamat datang di Web sederhana ini</div>
    <div class="text-sm my-5">
      <div>Web ini bertema tentang membuat daftar tugas atau Todo List</div>
      <div>
        Tidak menggunakan backend apapun dan masih sebatas lokal saja, ketika
        refresh ulang semua data akan hilang
      </div>
    </div>
    <button v-on:click="goToTodoList" class="bg-green-500 p-2 text-white">
      Menuju Daftar Tugas
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToTodoList() {
  router.push('/daftar-tugasku')
}
</script>
