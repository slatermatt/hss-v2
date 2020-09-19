<template>
	<button
		:class="[
			'flex flex-col items-center justify-between',
			'relative w-8 h-6 focus:outline-none',
		]"
	>
		<span
			v-for="(line, index) in $props.lines"
			:key="index"
			:class="[
				'transition block bg-white rounded-full duration-200',
				'h-2px left-0 w-full origin-left-center',
				{
					'transform rotate-45 translate-x-1': index === 0 && $props.open,
					'opacity-0': index === 1 && $props.open,
					'transform -rotate-45 translate-x-1': index === 2 && $props.open,
				},
			]"
		/>
	</button>
</template>

<script>
	export default {
		props: {
			open: Boolean,

			lines: {
				type: Number,
				default: 3,
			},
		},
	};
</script>
