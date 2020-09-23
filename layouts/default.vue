<template>
	<div
		:class="[
			'flex flex-col min-h-screen',
			'bg-white text-grey-700',
		]"
	>
		<site-header
			class="z-site-header"
			v-bind="$props.global"
		/>

		<main class="z-site-content flex-auto">
			<Nuxt />
		</main>

		<site-footer
			class="z-site-footer mt-10 md:mt-20 xl:mt-32"
			v-bind="$props.global"
		/>
	</div>
</template>

<script>
	import SiteHeader from '../components/global/SiteHeader';
	import SiteFooter from '../components/global/SiteFooter';

	export default {
		components: {
			SiteHeader,
			SiteFooter,
		},

		props: {
			global: {
				type: Object,
				default: () => require('../content/global.json'),
			},
		},
	};
</script>
