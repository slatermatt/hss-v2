<template>
	<component
		:is="cComponent"
		:href="$props.url"
		:class="[
			$data.classList[$props.variant],
			'inline-block px-8 py-4',
			'focus:outline-none',
			'disabled:bg-grey-600',
			{
				'opacity-75 bg-grey-700 cursor-not-allowed hover:bg-grey-700': $props.disabled,
			},
		]"
		:disabled="$props.disabled"
		v-bind="$attrs"
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

			variant: {
				type: String,
				default: 'primary',
			},

			disabled: Boolean,
		},

		data() {
			return {
				classList: {
					primary: [
						'bg-brand-green text-white',
						'hover:bg-brand-green-dark',
						'focus:bg-brand-green-dark',
					],
					secondary: [
						'bg-white text-brand-green',
						'hover:bg-grey-200',
						'focus:bg-grey-200',
					],
				},
			};
		},

		computed: {
			cComponent() {
				return this.$props.url ? 'a' : 'button';
			},
		},
	};
</script>
