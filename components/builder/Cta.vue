<template>
	<section class="bg-brand-off-white">
		<container>
			<div class="max-w-xl mx-auto text-center py-20">
				<h1
					class="text-brand-green text-4xl inline-block font-bold leading-snug"
					v-text="$props.title"
				/>

				<p
					v-if="$props.content"
					class="mt-4"
					v-html="$props.content"
				/>

				<e-button
					class="mt-8"
					v-bind="$props.cta"
				/>
			</div>
		</container>
	</section>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true,
			},

			content: {
				type: String,
				required: true,
			},

			cta: {
				type: Object,
				required: () => {},
			},
		},
	};
</script>
