<template>
	<section>
		<intro v-bind="$props.intro" />

		<container>
			<formulate-form
				v-model="$data.values"
				:schema="$props.form"
				class="flex flex-col items-center max-w-lg mx-auto space-y-6"
			/>
		</container>
	</section>
</template>

<script>
	export default {
		props: {
			intro: {
				type: Object,
				default: null,
			},

			form: {
				type: Array,
				default: null,
			},
		},

		data() {
			return {
				values: {},
			};
		},
	};
</script>
