<template>
	<component
		:is="cComponent"
		:href="$props.url"
		:class="[
			'inline-block px-8 py-4 bg-brand-green text-white',
			'hover:bg-brand-green-dark',
			'focus:outline-none focus:bg-brand-green-dark',
			'disabled:bg-grey-600',
			{
				'opacity-75 bg-grey-700 cursor-not-allowed hover:bg-grey-700': $props.disabled,
			},
		]"
		:disabled="$props.disabled"
	>
		<span v-text="$props.title" />
	</component>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true,
			},

			url: {
				type: String,
				default: null,
			},

			disabled: Boolean,
		},

		computed: {
			cComponent() {
				return this.$props.url ? 'a' : 'button';
			},
		},
	};
</script>
