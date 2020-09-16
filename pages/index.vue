<template>
	<container class="py-8">
		<h1 v-text="$data.model.title" />
	</container>
</template>

<script>
	export default {
		async asyncData ({ $content }) {
			const model = await $content('home').fetch();

			return model;
		},
	};
</script>
