<template>
  <footer class="bg-gradient-to-br from-purple-800 to-indigo-900 text-white py-4 mt-52">
    <div class="container mx-auto text-center">
      <p class="text-sm">© {{new Date().getFullYear()}} Tu Compañía. Todos los derechos reservados.</p>
    </div>
  </footer>
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
