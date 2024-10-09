<script setup>
import { ref } from 'vue';
import NewTask from './components/NewTask.vue';
import TaskList from './components/TaskList.vue';

const TODOS = [
  { id: '1', title: 'Design a website', Done: false },
  { id: '2', title: 'Develop the website', Done: false },
  { id: '3', title: 'Publish the website', Done: false },
];

const data = ref(TODOS);
</script>

<template>
  <main class="bg-yellow-50 h-screen p-20 max-md:p-0">
    <section
      class="bg-gray-800 flex flex-col max-w-3xl mx-auto text-yellow-50 p-8 rounded-2xl text-lg max-sm:text-base max-md:w-full max-md:rounded-none max-sm:h-screen"
    >
      <h1 class="text-4xl max-sm:text-2xl">Create your Todo-List</h1>
      <NewTask />
      <TaskList :data="data" />
    </section>
  </main>
</template>
