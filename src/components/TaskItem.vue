<script setup>
import svgIcon from '@jamescoyle/vue-icon';
import { mdiCheck, mdiPencilOutline, mdiTrashCanOutline } from '@mdi/js';
</script>

<template>
  <li class="flex justify-center items-center border border-yellow-500 rounded-xl py-3 px-4">
    <p class="mr-8">Design a website What are your tasks for today?</p>
    <div class="ml-auto flex justify-betwee">
      <svgIcon
        type="mdi"
        :path="mdiCheck"
        class="w-7 h-7 hover:text-green-400 transition-colors duration-200 ease-out"
      />
      <svgIcon
        type="mdi"
        :path="mdiPencilOutline"
        class="w-7 h-7 mx-2 hover:text-yellow-300 transition-colors duration-200 ease-out"
      />
      <svgIcon
        type="mdi"
        :path="mdiTrashCanOutline"
        class="w-7 h-7 hover:text-red-400 transition-colors duration-200 ease-out"
      />
    </div>
  </li>
</template>
