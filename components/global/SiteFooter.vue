<template>
	<container tag="footer" class="py-8">
		<h1>Site footer</h1>
	</container>
</template>

<script>
	export default {
		props: {
			links: {
				type: Array,
				default: null,
			},

			socials: {
				type: Array,
				default: null,
			},

			brand: {
				type: String,
				default: null,
			},
		},
	};
</script>
