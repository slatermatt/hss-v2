<template>
	<section>
		<container class="space-y-12">
			<div
				v-for="(size, index) in $props.sizes"
				:key="index"
				:class="[
					'flex mx-auto max-w-xl md:max-w-2xl',
					{
						'border-t border-grey-200 pt-12': index,
					},
				]"
			>
				<div class="hidden md:flex items-center flex-col">
					<div class="w-20 h-20">
						<icon :name="size.icon" />
					</div>

					<span class="w-px flex-auto bg-grey-200 mt-6" />
				</div>

				<div class="w-full text-center md:text-left md:ml-10">
					<h1
						class="inline-block text-xl font-bold text-grey-700 leading-normal"
						v-text="size.title"
					/>

					<p
						class="block mt-4"
						v-text="size.content"
					/>

					<ul class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 mt-10">
						<li
							v-for="(item, i) in size.items"
							:key="i"
							class="flex flex-col md:items-start"
						>
							<p
								class="text-xs"
								v-text="item.title"
							/>

							<p
								class="text-3xl font-bold text-brand-green"
								v-text="item.figure"
							/>
						</li>
					</ul>
				</div>
			</div>
		</container>
	</section>
</template>

<script>
	export default {
		props: {
			sizes: {
				type: Array,
				default: null,
			},
		},
	};
</script>
