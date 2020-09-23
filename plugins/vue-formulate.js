import Vue from 'vue';
import VueFormulate from '@braid/vue-formulate';

Vue.use(VueFormulate, {
	classes: {
		outer: 'w-full',
		label: 'sr-only',
		input(context) {
			switch (context.classification) {
				case 'button':
					return 'foo';

				default: return [
					'border-b-2 border-grey-400 w-full py-4 placeholder-brand-green',
					`focus:outline-none focus:border-brand-green ${context}`,
				];
			}
		},
		errors: 'mt-1',
		error: 'text-xs text-red',
	},
});
