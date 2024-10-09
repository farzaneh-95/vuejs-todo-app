<script setup>
import TaskItem from './TaskItem.vue';

const { data } = defineProps(['data']);
</script>

<template>
  <ul class="mt-8">
    <TaskItem v-for="todo in data" :key="todo.id" :title="todo.title" />
  </ul>
</template>
