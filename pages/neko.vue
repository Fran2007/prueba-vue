<template>
	<div class="flex justify-center mt-10">
		<button
			@click="fetchData"
			class="bg-purple-800 hover:bg-purple-900 mt-5 p-2 text-white uppercase font-bold rounded-full shadow-lg block transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
		>Agregar Imagen</button>

		<div v-for="info in info" :key="info.url">
			<img
				:src="info.url"
				alt="Neko Image"
			/>
			<p>{{info.artist_name}}</p>
		</div>
	</div>
</template>

<script>
	export default {
    layout: 'default',
		data() {
			return {
				info: []
			};
		},
		css: ['@styles/tailwind.css'],
		methods: {
			fetchData() {
				fetch('https://nekos.best/api/v2/neko')
					.then(response => response.json())
					.then(data => (this.info = data.results))
					.catch(err => console.error(err));
			}
		}
	};
</script>
