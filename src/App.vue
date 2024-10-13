<script setup>
import { ref, watchEffect } from 'vue';
import NewTask from './components/NewTask.vue';
import TaskList from './components/TaskList.vue';

const data = ref(JSON.parse(localStorage.getItem('data')) ?? []);

watchEffect(() => localStorage.setItem('data', JSON.stringify(data.value)));

const handleAddNewTask = (newTask) =>
  data.value.unshift({ id: Date.now(), title: newTask, done: false });

const handleRemoveTask = (id) => (data.value = data.value.filter((task) => task.id !== id));

const handleToggleDone = (id) =>
  (data.value = data.value.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));

const handleModifyTask = (id, modifiedTitle) =>
  (data.value = data.value.map((task) =>
    task.id === id ? { ...task, title: modifiedTitle } : task
  ));
</script>

<template>
  <main class="bg-yellow-50 h-screen p-20 max-sm:p-0 [@media(max-height:425px)]:p-0">
    <section
      class="bg-gray-800 flex flex-col max-h-full max-w-xl mx-auto text-yellow-50 p-8 rounded-2xl max-sm:text-sm max-sm:min-w-[344px] max-sm:rounded-none max-sm:h-screen [@media(max-height:425px)]:rounded-none"
    >
      <h1 class="text-4xl max-sm:text-2xl">Create your Todo-List</h1>
      <NewTask @addNewTask="handleAddNewTask" />
      <TaskList
        v-if="data.length"
        :data="data"
        @removeTask="handleRemoveTask"
        @toggleDone="handleToggleDone"
        @modifyTask="handleModifyTask"
      />
      <p
        v-else
        class="text-center mt-10 font-bold text-gray-400 [text-shadow:_-1px_-1px_0px_#333,_1px_-1px_0px_#333,_-1px_1px_0px_#333,_1px_1px_0px_#333] tracking-wider"
      >
        Your tasks will show up here!
      </p>
    </section>
  </main>
</template>
