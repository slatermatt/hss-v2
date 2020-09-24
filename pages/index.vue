<template>
	<div>
		<carousel
			v-bind="$data.model.carousel"
		/>

		<section class="border border-blue p-5 overflow-scroll">
			<span>component: cards</span>

			<div class="mt-4">
				<pre v-text="$data.model.cards" />
			</div>
		</section>

		<page-builder
			class="mb-12 md:mb-24 xl:mb-32"
			:components="$data.model.pageBuilder"
		/>
	</div>
</template>

<script>
	import Carousel from '../components/builder/Carousel';

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
		},
	};
</script>
