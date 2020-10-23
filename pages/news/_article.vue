<template>
	<div>
		<intro
			:title="$data.title"
			:content="$data.excerpt"
		/>

		<content-builder
			:components="$data.copy"
			class="mb-10 md:mb-16 xl:mb-24"
		/>
	</div>
</template>

<script>
	import ContentBuilder from '../../components/builder/ContentBuilder';

	export default {
		async asyncData ({ $content, params }) {
			return await $content(`/articles/${params.article}`).fetch();
		},

		head() {
			return {
				title: this.$data.title,
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: this.$data.excerpt
					},
					{
						hid: 'og:title',
						property: 'og:title',
						content: this.$data.title
					},
					{
						hid: 'og:description',
						property: 'og:description',
						content: this.$data.excerpt
					},
					{
						hid: 'twitter:title',
						name: 'twitter:title',
						content: this.$data.title
					},
					{
						hid: 'twitter:description',
						name: 'twitter:description',
						content: this.$data.excerpt
					}
				]
			};
		},

		components: {
			ContentBuilder,
		},
	};
</script>
