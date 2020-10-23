<template>
	<container>
		<p
			class="text-center max-w-3xl mx-auto"
			v-html="$props.content"
		/>
	</container>
</template>

<script>
	export default {
		props: {
			content: {
				type: String,
				default: null,
			},
		},
	};
</script>
