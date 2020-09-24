<template>
	<div>
		<div
			v-for="(component, index) in $props.components"
			:key="index"
			:class="componentClass(index)"
		>
			<component
				:is="pascalCase(component.type)"
				v-if="$options.components[pascalCase(component.type)]"
				v-bind="lowerCaseProps(component.value)"
			/>

			<div
				v-else
				class="border border-blue p-5 overflow-scroll"
			>
				<span>component: {{ component.type }}</span>

				<div class="mt-4">
					<pre v-text="lowerCaseProps(component.value)" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import camelCase from 'lodash/camelCase';
	import upperFirst from 'lodash/upperFirst';

	import Intro from '../builder/Intro';
	import Feature from '../builder/Feature';
	import Split from '../builder/Split';

	export default {
		components: {
			Intro,
			Feature,
			Split,
		},

		props: {
			components: {
				type: Array,
				default: null,
			},
		},

		methods: {
			pascalCase(name) {
				return upperFirst(camelCase(name));
			},

			lowerCaseProps(props) {
				const newObj = Object.fromEntries(
					Object.entries(props).map(([k, v]) => [k.toLowerCase(), v])
				);

				return newObj;
			},

			componentClass(index) {
				const mt = index
					? 'mt-10 md:mt-20 xl:mt-32'
					: 'mt-12 md:mt-24 xl:mt-32';

				return mt;
			},
		},
	};
</script>
