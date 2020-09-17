<template>
	<div>
		<section class="border border-blue p-5 overflow-scroll">
			<span>component: intro</span>

			<div class="mt-4">
				<pre v-text="$data.model.intro" />
			</div>
		</section>

		<section class="border border-blue p-5 overflow-scroll">
			<span>component: all-news</span>

			<div class="mt-4">
				<pre v-text="$data.articles" />
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
			const articles = await $content('articles').fetch();
			const model = await $content('news').fetch();

			return { articles, ...model };
		},
	};
</script>
