<script setup>
import svgIcon from '@jamescoyle/vue-icon';

const { path, style } = defineProps(['path', 'style']);
</script>

<template>
  <svgIcon
    type="mdi"
    :path="path"
    class="w-5 h-5 transition-colors duration-200 ease-out mx-1 max-sm:w-4 max-sm:h-4"
    :class="style"
  />
</template>
