<template>
	<section>
		<container>
			<div class="max-w-lg mx-auto text-center py-20">
				<h1
					class="text-brand-green text-4xl inline-block font-bold leading-snug"
					v-text="$props.title"
				/>

				<p
					v-if="$props.content"
					class="mt-4"
					v-html="$props.content"
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
				default: null,
			},
		},
	};
</script>
