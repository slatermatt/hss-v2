<template>
	<section>
		<container class="space-y-12">
			<article
				v-for="(testimonial, index) in cTestimonials"
				:key="index"
				class="mx-auto max-w-xl md:max-w-2xl"
			>
				<h1
					class="text-2xl text-brand-green font-bold"
					v-text="testimonial.title"
				/>

				<blockquote
					class="mt-4"
					v-html="testimonial.content"
				/>

				<p
					class="font-bold text-grey-700 mt-4"
					v-text="testimonial.author"
				/>

				<p
					class="text-sm mt-2"
					v-text="testimonial.date"
				/>
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
			cTestimonials() {
				const testimonials = Array(...this.$props.items);
				const from = this.$data.currentPage * this.$data.pageSize;
				const to = from + this.$data.pageSize;

				return testimonials.slice(from, to);
			},

			cPages() {
				return Math.round(this.$data.totalArticles / this.$data.pageSize);
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
