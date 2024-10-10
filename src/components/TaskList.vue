<script setup>
import TaskItem from './TaskItem.vue';

const { data } = defineProps(['data']);
defineEmits(['removeTask']);
</script>

<template>
  <ul class="hide-scroll max-h-full mt-8 overflow-y-scroll overscroll-none box-content">
    <TaskItem
      v-for="todo in data"
      :key="todo.id"
      :title="todo.title"
      @removeTask="$emit('removeTask', todo.id)"
    />
  </ul>
</template>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
