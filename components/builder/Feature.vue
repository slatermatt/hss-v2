<template>
	<section class="bg-brand-green text-white py-20 md:py-32">
		<container class="grid justify-center gap-y-20 gap-x-12 md:justify-start md:grid-cols-2">
			<div
				v-for="(feature, index) in $props.features"
				:key="index"
				class="flex items-start"
			>
				<div class="flex-shrink-0 w-12 h-12 lg:w-20 lg:h-20">
					<icon :name="feature.icon" />
				</div>

				<div
					:class="[
						'ml-3 pt-2',
						'sm:max-w-sm',
						'lg:pt-5 lg:ml-8',
					]"
				>
					<h1
						class="text-2xl"
						v-text="feature.title"
					/>

					<p
						class="mt-4"
						v-text="feature.content"
					/>
				</div>
			</div>
		</container>
	</section>
</template>

<script>
	export default {
		props: {
			features: {
				type: Array,
				default: null,
			},
		},
	};
</script>
