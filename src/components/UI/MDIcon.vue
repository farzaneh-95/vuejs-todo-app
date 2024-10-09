<script setup>
import svgIcon from '@jamescoyle/vue-icon';

const { path, style } = defineProps(['path', 'style']);
</script>

<template>
  <svgIcon
    type="mdi"
    :path="path"
    class="w-6 h-6 transition-colors duration-200 ease-out mx-1"
    :class="style"
  />
</template>
