<template>
	<container tag="header" class="py-8">
		<h1>Site header</h1>
	</container>
</template>

<script>
	export default {
		inheritAttrs: false,

		props: {
			links: {
				type: Array,
				default: null,
			},

			locations: {
				type: Array,
				default: null,
			},
		},
	};
</script>
