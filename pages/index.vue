<template>
	<div>
		<section class="border border-blue p-5 overflow-scroll">
			<span>component: carousel</span>

			<div class="mt-4">
				<pre v-text="$data.model.carousel" />
			</div>
		</section>

		<section class="border border-blue p-5 overflow-scroll">
			<span>component: cards</span>

			<div class="mt-4">
				<pre v-text="$data.model.cards" />
			</div>
		</section>

		<page-builder
			:components="$data.model.pageBuilder"
		/>
	</div>
</template>

<script>
	export default {
		async asyncData ({ $content }) {
			return await $content('home').fetch();
		},
	};
</script>
