<template>
	<div>
		<intro
			v-bind="$data.model.intro"
		/>

		<size-estimator
			class="mt-12 md:mt-24"
			v-bind="$data.model.sizeEstimator"
		/>

		<cta
			class="mt-12 md:mt-24 xl:mt-32"
			v-bind="$data.model.cta"
		/>
	</div>
</template>

<script>
	import SizeEstimator from '../../components/builder/SizeEstimator';

	export default {
		async asyncData ({ $content }) {
			return await $content('size-estimator').fetch();
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
			SizeEstimator,
		},
	};
</script>
