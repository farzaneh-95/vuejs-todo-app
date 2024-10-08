<script setup>
import svgIcon from '@jamescoyle/vue-icon';
import { mdiCheck, mdiPencilOutline, mdiTrashCanOutline } from '@mdi/js';
</script>

<template>
  <main class="bg-yellow-50 h-screen p-20 max-md:p-0">
    <section
      class="bg-gray-800 flex flex-col max-w-3xl mx-auto text-yellow-50 p-8 rounded-2xl text-lg max-sm:text-base max-md:w-full max-md:rounded-none max-sm:h-screen"
    >
      <h1 class="text-4xl max-sm:text-2xl">Create your Todo-List</h1>
      <form class="mt-6 mb-8 flex">
        <input
          type="text"
          placeholder="What are your tasks for today?"
          class="bg-gray-800 border border-yellow-50 rounded-xl py-3 px-4 mr-2 placeholder-yellow-50 flex-1"
        />
        <button type="submit" class="font-semibold border border-yellow-50 rounded-xl py-3 px-4">
          Add
        </button>
      </form>
      <ul>
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
      </ul>
    </section>
  </main>
</template>
