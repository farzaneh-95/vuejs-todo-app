<script setup>
import { ref } from 'vue';

const newTask = ref('');

const emit = defineEmits(['addNewTask']);

const handleSubmit = () => {
  if (newTask.value !== '') {
    emit('addNewTask', newTask.value);
    newTask.value = '';
  }
};
</script>

<template>
  <form class="mt-6 mb-8 flex" @submit.prevent="handleSubmit">
    <input
      type="text"
      placeholder="What are your tasks for today?"
      v-model="newTask"
      class="bg-gray-800 border border-yellow-50 rounded-xl py-3 px-4 mr-2 placeholder-yellow-50 flex-1"
    />
    <button
      type="submit"
      class="font-semibold border border-yellow-50 rounded-xl py-3 px-4 hover:bg-white/5 transition-colors ease-out"
    >
      Add
    </button>
  </form>
</template>
