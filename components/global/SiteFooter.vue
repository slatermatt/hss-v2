<template>
	<footer class="bg-brand-green text-white">
		<container class="py-8">
			<nav>
				<ul class="flex items-center space-x-4 justify-center">
					<li
						v-for="(social, index) in $props.socials"
						:key="index"
						class="w-10 h-10"
					>
						<a :href="social.url">
							<icon :name="social.icon" />
						</a>
					</li>
				</ul>

				<ul class="flex flex-col items-center space-y-3 mt-8 md:flex-row md:space-x-6 md:space-y-0 md:justify-center">
					<li
						v-for="(link, index) in $props.links"
						:key="index"
					>
						<router-link
							:to="link.url"
							class="text-sm"
							v-text="link.title"
						/>
					</li>
				</ul>
			</nav>

			<p
				class="text-center text-xs opacity-75 mt-8"
				v-html="cCopyright"
			/>
		</container>
	</footer>
</template>

<script>
	export default {
		inheritAttrs: false,

		props: {
			links: {
				type: Array,
				default: null,
			},

			socials: {
				type: Array,
				default: null,
			},

			brand: {
				type: String,
				default: null,
			},
		},

		computed: {
			cCopyright() {
				const year = new Date().getFullYear();

				return `&copy;${year} ${this.$props.brand}`;
			},
		},
	};
</script>
