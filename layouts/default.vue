<template>
	<div
		:class="[
			'flex flex-col min-h-screen',
			'bg-white text-grey-700',
		]"
	>
		<site-header
			class="border-4 border-red"
			v-bind="$props.global"
		/>

		<main class="flex-auto border-4 border-green">
			<Nuxt />
		</main>

		<site-footer
			class="border-4 border-blue"
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
