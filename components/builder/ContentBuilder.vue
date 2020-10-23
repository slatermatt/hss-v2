<template>
	<article>
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
		</div>
	</article>
</template>

<script>
	import camelCase from 'lodash/camelCase';
	import upperFirst from 'lodash/upperFirst';

	import Media from '../common/Media';
	import Paragraph from '../common/Paragraph';

	export default {
		components: {
			Media,
			Paragraph,
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
					? 'mt-8 md:mt-10 xl:mt-12'
					: 'mt-10 md:mt-12 xl:mt-16';

				return mt;
			},
		},
	};
</script>
