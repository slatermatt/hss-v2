<template>
	<section class="bg-brand-green text-white">
		<container
			:class="[
				'space-y-10 py-12',
				'md:flex md:justify-center md:items-center md:space-y-0 md:space-x-24 md:py-20',
				'lg:space-x-32',
			]"
		>
			<div
				v-for="(location, index) in $props.locations"
				:key="index"
				class="text-center"
			>
				<h1
					class="text-sm"
					v-text="location.title"
				/>

				<a
					:href="`tel:${location.number.formatted}`"
					class="inline-block leading-none text-3xl font-bold mt-4"
					v-text="location.number.text"
				/>

				<div class="space-y-1 text-sm mt-4">
					<p v-text="location.address" />

					<p v-text="location.town" />

					<p v-text="location.postcode" />
				</div>

				<e-button
					class="mt-4"
					type="secondary"
					v-bind="location.cta"
				/>
			</div>
		</container>
	</section>
</template>

<script>
	export default {
		props: {
			locations: {
				type: Array,
				default: null,
			},
		},
	};
</script>
