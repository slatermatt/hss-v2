<template>
	<component
		:is="$props.tag"
		class="max-w-container w-full mx-auto px-5"
	>
		<slot />
	</component>
</template>

<script>
	export default {
		props: {
			tag: {
				type: String,
				default: 'div',
			},
		},
	};
</script>
