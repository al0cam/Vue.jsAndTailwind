<script setup lang="ts"></script>

// TODO: write custom classes for tailwindcss for flex style

<template>
  <div class="flex flex-col h-screen w-screen items-center bg-slate-500 relative">
    <div class="border-b w-full flex flex-row">
      <button class="text-3xl font-bold static border-r p-2 hover:scale-110">
        Item 1
      </button>
      <span class="text-3xl font-bold static border-r p-2"> Item 2 </span>
      <span class="text-3xl font-bold static border-r p-2"> Item 3 </span>
      <span class="text-3xl font-bold static border-r p-2"> Item 4 </span>
    </div>

    <div class="w-full">
      <span class="text-3xl font-bold relative"> Hello world! </span>
    </div>
  </div>
</template>

<style scoped>
.class {
  color: red;
  text-align: center;
}
</style>
