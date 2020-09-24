<template>
	<section>
		<container
			:class="[
				'flex flex-col items-center justify-center space-y-12',
				'lg:flex-row lg:space-x-16 lg:space-y-0 lg:items-stretch',
			]"
		>
			<div
				v-for="(card, index) in $props.items"
				:key="index"
				:class="[
					'flex flex-col items-center shadow-2xl',
					'px-16 pt-4 pb-16 space-y-8 max-w-lg',
					index
						? 'bg-brand-green text-white'
						: 'bg-brand-off-white',
				]"
			>
				<div class="w-24 h-24">
					<icon :name="card.icon" />
				</div>

				<h1
					:class="[
						'text-xl font-bold md:text-2xl',
						{
							'text-brand-green': !index,
						},
					]"
					v-text="card.title"
				/>

				<p
					v-text="card.content"
				/>

				<ul
					v-if="card.items"
					:class="[
						'space-y-4 pb-4 max-w-xs mx-auto text-left',
						'md:mx-0 md:text-left',
					]"
				>
					<li
						v-for="(item, i) in card.items"
						:key="i"
						class="flex items-center space-x-2"
					>
						<div class="flex-shrink-0 w-6 h-6">
							<icon
								:class="{
									'text-brand-green': !index,
								}"
								name="box"
							/>
						</div>

						<span v-text="item" />
					</li>
				</ul>

				<nuxt-link
					v-if="card.link"
					:to="card.link.url"
					v-text="card.link.title"
					class="block relative mt-4"
				/>

				<e-button
					v-if="card.cta"
					:title="card.cta.title"
					:url="card.cta.url"
					class="inline-block relative mt-4"
					:variant="index ? 'secondary' : 'primary'"
				/>
			</div>
		</container>
	</section>
</template>

<script>
	export default {
		props: {
			items: {
				type: Array,
				default: null,
			},
		},
	};
</script>
