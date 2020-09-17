<template>
	<header class="bg-brand-green">
		<container class="py-8">
			<nuxt-link
				to="/"
				class="block max-w-logo"
			>
				<logo />
			</nuxt-link>
		</container>
	</header>
</template>

<script>
	import Logo from '../common/Logo';

	export default {
		inheritAttrs: false,

		components: {
			Logo,
		},

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
