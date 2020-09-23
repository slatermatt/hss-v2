<template>
	<header class="sticky top-0 bg-brand-green shadow-lg md:relative md:shadow-2xl">
		<container
			:class="[
				'flex items-center justify-between bg-brand-green',
				'relative z-2 py-6',
				'md:py-8 xl:justify-start',
			]"
		>
			<nuxt-link
				to="/"
				class="block w-full max-w-logo lg:max-w-logo-xl"
			>
				<logo />
			</nuxt-link>

			<nav class="hidden md:block xl:ml-auto">
				<ul class="flex space-x-6 lg:space-x-8">
					<li
						v-for="(link, index) in $props.links"
						:key="index"
					>
						<router-link
							:to="link.url"
							class="text-white"
							v-text="link.title"
						/>
					</li>
				</ul>
			</nav>

			<div class="hidden relative bg-white py-6 ml-8 -mt-8 -mb-12 xl:block">
				<div
					v-for="(location, index) in $props.locations"
					:key="index"
					:class="[
						'flex flex-col justify-center items-center px-10',
						{
							'mt-2': index,
						},
					]"
				>
					<p
						class="text-sm"
						v-text="location.title"
					/>

					<a
						class="text-xl text-brand-green font-bold"
						:href="`tel:${location.number.formatted}`"
						v-text="location.number.text"
					/>
				</div>
			</div>

			<burger
				:open="$data.visible"
				@click.native="$data.visible = !$data.visible"
				class="md:hidden"
			/>
		</container>

		<transition
			enter-class="-translate-y-full"
			leave-to-class="-translate-y-full opacity-25"
			enter-active-class="transform transition-transform duration-500"
			leave-active-class="transform transition-all duration-300"
		>
			<nav
				v-if="$data.visible"
				:class="[
					'absolute top-24/24 left-0 w-full',
					'bg-brand-green-dark shadow-2xl z-1 md:hidden',
				]"
			>
				<container
					tag="ul"
					class="flex flex-col items-center space-y-1 py-4"
				>
					<li
						v-for="(link, index) in $props.links"
						:key="index"
						class="text-white p-2"
					>
						<a
							:href="link.url"
							@click.prevent="onMobileClick(link.url)"
							v-text="link.title"
						/>
					</li>
				</container>

				<div class="relative bg-white py-6">
					<div
						v-for="(location, index) in $props.locations"
						:key="index"
						:class="[
							'flex flex-col justify-center items-center px-5',
							{
								'mt-2': index,
							},
						]"
					>
						<p
							class="text-sm"
							v-text="location.title"
						/>

						<a
							class="text-xl text-brand-green font-bold"
							:href="`tel:${location.number.formatted}`"
							v-text="location.number.text"
						/>
					</div>

					<transition
						enter-class="opacity-0"
						enter-active-class="transition-opacity duration-500"
						appear
					>
						<span
							class="absolute h-screen left-0 top-24/24 w-full bg-black-25"
							@click="$data.visible = false"
						/>
					</transition>
				</div>
			</nav>
		</transition>
	</header>
</template>

<script>
	import Logo from '../common/Logo';
	import Burger from '../common/Burger';

	export default {
		inheritAttrs: false,

		components: {
			Logo,
			Burger,
		},

		props: {
			links: {
				type: Array,
				default: null,
			},

			locations: {
				type: Array,
				default: null,
			},
		},

		data() {
			return {
				visible: false,
			};
		},

		methods: {
			onMobileClick(link) {
				this.$data.visible = false;

				this.$router.push({
					path: link,
				});
			},
		},
	};
</script>
