<template>
  <div class="flex justify-between items-center relative p-5 shadow rounded-b-l bg-[rgba(25,255,25,0.1)]">
    <div class=" bg-[url('/img/imagenes.png')] backdrop-filter-blur boxShadow-white rounded-xl p-6 border-almost-white flex-none w-14 h-14"></div>
    <div class="relative">
      <div class="">
        <img 
          src=""
          alt=""
        >
      </div>
      <h1 class="text-2xl font-bold">Neko Images</h1>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "Mi componente",
        message: "Mensaje del componente",
      };
    },
  };
</script>
