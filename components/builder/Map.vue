<template>
	<section>
		<div class="min-h-map relative bg-grey-300">
			<iframe
				:src="$props.src"
				class="absolute inset-0 border-none w-full h-full"
			/>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				default: null,
			},
		},
	};
</script>
