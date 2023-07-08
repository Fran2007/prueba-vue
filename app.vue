 <template>
	<div class="h-screen bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-700">
		<Header />
		<neko />
		<Footer />
	</div>
</template>

<script>
	import Header from './src/components/Header.vue'
	import neko from './pages/neko.vue'
	import Footer from './src/components/Footer.vue'
	
	export default {
		name: 'app',
		components: {
			Header,
			neko,
			Footer
		}
	}
</script>
