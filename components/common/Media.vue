<template>
	<container>
		<placeholder :ratio="$props.ratio">
			<video
				v-if="$props.video"
				:src="$props.video.src"
			/>

			<img
				v-else
				:src="$props.image.src"
				:alt="$props.image.alt"
			>
		</placeholder>
	</container>
</template>

<script>
	export default {
		props: {
			ratio: {
				type: String,
				default: null,
			},

			video: {
				type: Object,
				default: null,
			},

			image: {
				type: Object,
				default: null,
			},
		},
	};
</script>
