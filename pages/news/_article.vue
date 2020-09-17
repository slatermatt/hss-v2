<template>
	<div>
		<section class="border border-blue p-5 overflow-scroll">
			<span>component: intro</span>

			<div class="mt-4">
				<pre v-text="$data.title" />
			</div>
		</section>

		<content-builder
			:components="$data.copy"
		/>
	</div>
</template>

<script>
	export default {
		async asyncData ({ $content, params }) {
			return await $content(`/articles/${params.article}`).fetch();
		},
	};
</script>
