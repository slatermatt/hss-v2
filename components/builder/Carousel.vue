<template>
	<section class="relative bg-grey-700 overflow-hidden xl:max-w-video xl:mx-auto">
		<div
			:class="[
				'relative w-full max-h-carousel h-full',
				'xl:max-w-video xl:mx-auto',
			]"
		>
			<span class="block relative w-full pt-4/3 sm:pt-9/16" />

			<video
				v-if="$props.media.video"
				:src="$props.media.video.src"
				class="absolute inset-0 w-full h-full object-cover"
				autoplay
				muted
				loop
			/>

			<img
				v-else
				v-bind="$props.media.img"
				class="absolute inset-0 w-full h-full"
			>

			<span class="absolute inset-0 w-full h-full bg-black opacity-25" />

			<div
				:class="[
					'flex items-center justify-center',
					'absolute inset-0 w-full h-full px-5 md:px-10',
				]"
			>
				<transition
					enter-class="-translate-x-full opacity-0"
					leave-to-class="translate-x-full opacity-0"
					enter-active-class="transform transition duration-300"
					leave-active-class="transform transition duration-300"
					mode="out-in"
				>
					<h1
						:class="[
							'text-white font-bold text-center',
							'text-2xl max-w-xs',
							'sm:text-3xl',
							'md:text-4xl',
							'lg:max-w-sm lg:text-5xl',
						]"
						:key="$data.index"
						v-text="cActiveMessage"
					/>
				</transition>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			media: {
				type: Object,
				default: null,
			},

			messages: {
				type: Array,
				default: null,
			},
		},
		
		data() {
			return {
				index: 0,
				initialDelay: 2000,
				slideDuration: 3000,
			};
		},

		computed: {
			cActiveMessage() {
				return this.$props.messages[this.$data.index].title;
			},

			cUpperLimit() {
				return this.$data.index === (this.$props.messages.length - 1);
			},
		},

		mounted() {
			setTimeout(this.loop(), this.$data.initialDelay);
		},

		methods: {
			loop() {
				setInterval(() => {
					this.$data.index = this.cUpperLimit ? 0 : (this.$data.index + 1);
				}, this.$data.slideDuration);
			},
		},
	};
</script>
