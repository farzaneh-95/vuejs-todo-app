<script setup>
import { mdiCheck, mdiPencilOutline, mdiTrashCanOutline } from '@mdi/js';
import MDIcon from './UI/MDIcon.vue';

const { title } = defineProps(['title']);
defineEmits(['removeTask']);
</script>

<template>
  <li
    class="flex justify-center items-center border border-yellow-100 rounded-xl py-3 pl-4 pr-3 mb-4 hover:bg-black/10 animate-show opacity-0"
  >
    <p class="mr-8">{{ title }}</p>
    <div class="ml-auto flex justify-betwee text-white/80">
      <MDIcon :path="mdiCheck" class="hover:text-green-400" />
      <MDIcon :path="mdiPencilOutline" class="hover:text-yellow-300" />
      <MDIcon
        :path="mdiTrashCanOutline"
        class="hover:text-red-400"
        @removeTask="$emit('removeTask')"
      />
    </div>
  </li>
</template>
