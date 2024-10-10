<script setup>
import { ref } from 'vue';
import NewTask from './components/NewTask.vue';
import TaskList from './components/TaskList.vue';

let id = 0;

const TODOS = [
  { id: id++, title: 'Design a website', done: true },
  { id: id++, title: 'Develop the website', done: false },
  { id: id++, title: 'Publish the website', done: false },
];

const data = ref(TODOS);

const handleAddNewTask = (newTask) => data.value.unshift({ id: id++, title: newTask, done: false });

const handleRemoveTask = (id) => (data.value = data.value.filter((task) => task.id !== id));

const handleToggleDone = (id) =>
  (data.value = data.value.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));

const handleModifyTask = (id, modifiedTitle) =>
  (data.value = data.value.map((task) =>
    task.id === id ? { ...task, title: modifiedTitle } : task
  ));
</script>

<template>
  <main class="bg-yellow-50 h-screen p-20 max-sm:p-0">
    <section
      class="bg-gray-800 flex flex-col max-h-full max-w-xl mx-auto text-yellow-50 p-8 rounded-2xl max-sm:text-sm max-sm:min-w-[344px] max-sm:rounded-none max-sm:h-screen"
    >
      <h1 class="text-4xl max-sm:text-2xl">Create your Todo-List</h1>
      <NewTask @addNewTask="handleAddNewTask" />
      <TaskList
        :data="data"
        @removeTask="handleRemoveTask"
        @toggleDone="handleToggleDone"
        @modifyTask="handleModifyTask"
      />
    </section>
  </main>
</template>
