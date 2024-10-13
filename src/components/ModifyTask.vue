<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue';
import { mdiClose, mdiContentSaveEditOutline } from '@mdi/js';
import MDIcon from './UI/MDIcon.vue';

const { title } = defineProps(['title']);
defineEmits(['modifyTask', 'cancelModify']);

const modifiedTask = ref(title);
const inputRef = useTemplateRef('input');

onMounted(() => inputRef.value.focus());
</script>

<template>
  <li
    class="flex justify-center items-center border border-yellow-100 rounded-xl py-3 pl-4 pr-3 mb-4"
  >
    <input
      type="text"
      ref="input"
      class="w-full bg-transparent border-b outline-none px-1 mr-2"
      v-model="modifiedTask"
    />
    <MDIcon
      :path="mdiContentSaveEditOutline"
      class="text-blue-300 hover:text-blue-400"
      @click="$emit('modifyTask', modifiedTask)"
    />
    <MDIcon
      :path="mdiClose"
      class="text-red-300 hover:text-red-400"
      @click="$emit('cancelModify')"
    />
  </li>
</template>
