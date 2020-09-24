<template>
	<div>
		<carousel
			class="z-1"
			v-bind="$data.model.carousel"
		/>

		<cards
			class="relative mt-12 md:mt-24 lg:-mt-16 z-2"
			v-bind="$data.model.cards"
		/>

		<page-builder
			class="mb-12 md:mb-24 xl:mb-32"
			:components="$data.model.pageBuilder"
		/>
	</div>
</template>

<script>
	import Carousel from '../components/builder/Carousel';
	import Cards from '../components/builder/Cards';

	export default {
		async asyncData ({ $content }) {
			return await $content('home').fetch();
		},

		head() {
			return {
				title: this.$data.title,
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: this.$data.description
					},
					{
						hid: 'og:title',
						property: 'og:title',
						content: this.$data.title
					},
					{
						hid: 'og:description',
						property: 'og:description',
						content: this.$data.description
					},
					{
						hid: 'twitter:title',
						name: 'twitter:title',
						content: this.$data.title
					},
					{
						hid: 'twitter:description',
						name: 'twitter:description',
						content: this.$data.description
					}
				]
			}
		},

		components: {
			Carousel,
			Cards,
		},
	};
</script>
