<template>
	<div>
		<section class="border border-blue p-5 overflow-scroll">
			<span>component: intro</span>

			<div class="mt-4">
				<pre v-text="$data.model.intro" />
			</div>
		</section>

		<section class="border border-blue p-5 overflow-scroll">
			<span>component: size-estimator</span>

			<div class="mt-4">
				<pre v-text="$data.model.sizeEstimator" />
			</div>
		</section>

		<section class="border border-blue p-5 overflow-scroll">
			<span>component: cta</span>

			<div class="mt-4">
				<pre v-text="$data.model.cta" />
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		async asyncData ({ $content }) {
			return await $content('size-estimator').fetch();
		},
	};
</script>
