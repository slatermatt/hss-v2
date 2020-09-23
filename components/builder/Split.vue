<template>
	<section>
		<container
			:class="[
				'grid gap-4',
				'md:grid-cols-2 md:items-center md:gap-8',
				'lg:grid-cols-5 lg:gap-16',
			]"
		>
			<div
				:class="[
					'relative',
					'lg:col-span-3',
					$props.flip
						? 'lg:mt-20'
						: 'lg:mb-20',
				]"
			>
				<placeholder
					ratio="pt-9/16"
					class="z-1"
				>
					<img
						:src="$props.image.src"
						:alt="$props.image.alt"
					>
				</placeholder>

				<span
					:class="[
						'hidden lg:block',
						'absolute w-full h-full',
						$props.flip
							? 'inset-x-3/24 -inset-y-3/24 bg-grey-300'
							: '-inset-x-3/24 inset-y-4/24 bg-brand-green',
					]"
				/>
			</div>

			<div
				:class="[
					'space-y-4 text-center max-w-sm mx-auto md:mx-0',
					'lg:col-span-2',
					$props.flip
						? 'md:text-right md:ml-auto'
						: 'md:text-left',
					{
						'md:row-start-1': $props.flip,
					},
				]"
			>
				<h1
					class="text-xl text-brand-green font-bold md:text-2xl"
					v-text="$props.title"
				/>

				<p
					v-text="$props.content"
				/>

				<ul
					v-if="$props.items"
					:class="[
						'space-y-4 pb-4 max-w-xs mx-auto text-left md:mx-0',
						$props.flip
							? 'md:text-right md:ml-auto'
							: 'md:text-left',
					]"
				>
					<li
						v-for="(item, index) in $props.items"
						:key="index"
						class="flex items-center space-x-2"
					>
						<div class="flex-shrink-0 w-6 h-6">
							<icon class="text-brand-green" name="box" />
						</div>

						<span v-text="item" />
					</li>
				</ul>

				<e-button
					v-if="$props.cta"
					:title="$props.cta.title"
					:url="$props.cta.url"
					class="inline-block relative mt-4"
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
				default: null,
			},

			content: {
				type: String,
				default: null,
			},

			items: {
				type: Array,
				default: null,
			},

			image: {
				type: Object,
				default: null,
			},

			cta: {
				type: Object,
				default: null,
			},

			flip: Boolean,
		},
	};
</script>
