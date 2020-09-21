<template>
	<section>
		<container class="space-y-12">
			<article
				v-for="(article, index) in cArticles"
				:key="index"
				class="grid mx-auto max-w-3xl gap-4 md:max-w-4xl md:grid-cols-4 md:gap-0"
			>
				<div class="col-span-1">
					<placeholder
						v-if="article.thumbnail"
						ratio="pt-3/4"
					>
						<img
							:src="article.thumbnail.src"
							:alt="article.thumbnail.alt"
						>
					</placeholder>
				</div>

				<div class="md:ml-10 md:col-span-3">
					<h1
						class="text-2xl text-brand-green font-bold"
						v-text="article.title"
					/>

					<p
						class="mt-4"
						v-text="article.excerpt"
					/>

					<router-link
						:to="`/news/${article.slug}`"
						class="inline-block mt-4 text-grey-700 font-bold hover:underline"
						v-text="'Read more'"
					/>
				</div>
			</article>

			<nav
				v-if="$data.totalArticles > $data.pageSize"
				class="flex items-center justify-center space-x-4"
			>
				<e-button
					@click.native="onSkip(false)"
					:disabled="cLowerLimit"
					title="Prev"
				/>

				<p v-text="cMap" />

				<e-button
					@click.native="onSkip(true)"
					:disabled="cUpperLimit"
					title="Next"
				/>
			</nav>
		</container>
	</section>
</template>

<script>
	export default {
		props: {
			items: {
				type: Array,
				default: null,
			},
		},

		data() {
			return {
				currentPage: 0,
				pageSize: 6,
				totalArticles: this.$props.items.length,
			};
		},

		computed: {
			cFlipped() {
				return this.$props.items.reverse();
			},

			cArticles() {
				const articles = Array(...this.cFlipped);
				const from = this.$data.currentPage * this.$data.pageSize;
				const to = from + this.$data.pageSize;

				return articles.slice(from, to);
			},

			cPages() {
				return Math.ceil(this.$data.totalArticles / this.$data.pageSize);
			},

			cMap() {
				return `${this.$data.currentPage + 1} of ${this.cPages}`;
			},

			cUpperLimit() {
				return this.$data.currentPage === this.cPages - 1;
			},

			cLowerLimit() {
				return this.$data.currentPage === 0;
			},
		},

		methods: {
			onSkip(forward) {
				this.$data.currentPage = this.$data.currentPage + (forward ? 1 : -1);
			},
		},
	};
</script>
