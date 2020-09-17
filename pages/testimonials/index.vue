<template>
	<div>
		<section class="border border-blue p-5 overflow-scroll">
			<span>component: intro</span>

			<div class="mt-4">
				<pre v-text="$data.model.intro" />
			</div>
		</section>

		<section class="border border-blue p-5 overflow-scroll">
			<span>component: testimonials</span>

			<div class="mt-4">
				<pre v-text="$data.model.testimonials" />
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
			return await $content('testimonials').fetch();
		},
	};
</script>
