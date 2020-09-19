<template>
	<component
		:is="$props.tag"
		class="e-placeholder relative w-full"
		:class="$props.ratio ? $props.ratio : 'pt-9/16'"
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

			ratio: {
				type: String,
				default: null,
			},
		},
	}
</script>

<style lang="scss" scoped>
	.e-placeholder {
		> * {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
