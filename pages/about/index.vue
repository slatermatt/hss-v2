<template>
	<div>
		<section class="border border-blue p-5 overflow-scroll">
			<span>component: intro</span>

			<div class="mt-4">
				<pre v-text="$data.model.intro" />
			</div>
		</section>

		<content-builder
			:components="$data.model.copy"
		/>

		<section class="border border-blue p-5 overflow-scroll">
			<span>component: cta</span>

			<div class="mt-4">
				<pre v-text="$data.model.cta" />
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		async asyncData ({ $content }) {
			return await $content('about').fetch();
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
		}
	};
</script>
