<script setup>
import { mdiCheck, mdiPencilOutline, mdiTrashCanOutline } from '@mdi/js';
import MDIcon from './UI/MDIcon.vue';

const { title, done } = defineProps(['title', 'done']);
defineEmits(['removeTask', 'toggleDone']);
</script>

<template>
  <li
    class="flex justify-center items-center border border-yellow-100 rounded-xl py-3 pl-4 pr-3 mb-4 animate-show opacity-0"
    :class="{ 'bg-white/15': done, 'hover:bg-white/20': done, 'hover:bg-black/15': !done }"
  >
    <p class="mr-8" :class="{ 'line-through': done }">{{ title }}</p>
    <div class="ml-auto flex justify-betwee text-white/80">
      <MDIcon
        :path="mdiCheck"
        class="hover:text-green-400"
        :class="{ 'text-green-400': done }"
        @click="$emit('toggleDone')"
      />
      <MDIcon :path="mdiPencilOutline" class="hover:text-yellow-300" />
      <MDIcon :path="mdiTrashCanOutline" class="hover:text-red-400" @click="$emit('removeTask')" />
    </div>
  </li>
</template>
