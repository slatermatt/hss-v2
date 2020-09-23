<template>
	<div>
		<intro v-bind="$data.model.intro" />

		<contact-info v-bind="$data.model.contactInfo" />

		<e-map v-bind="$data.model.map" />

		<contact-form v-bind="$data.model.contactForm" />
	</div>
</template>

<script>
	import ContactInfo from '../../components/builder/ContactInfo';
	import EMap from '../../components/builder/Map';
	import ContactForm from '../../components/builder/ContactForm';

	export default {
		async asyncData ({ $content }) {
			return await $content('contact').fetch();
		},

		head() {
			return {
				title: this.$data.title,
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: this.$data.description
					},
					{
						hid: 'og:title',
						property: 'og:title',
						content: this.$data.title
					},
					{
						hid: 'og:description',
						property: 'og:description',
						content: this.$data.description
					},
					{
						hid: 'twitter:title',
						name: 'twitter:title',
						content: this.$data.title
					},
					{
						hid: 'twitter:description',
						name: 'twitter:description',
						content: this.$data.description
					}
				]
			}
		},

		components: {
			ContactInfo,
			EMap,
			ContactForm,
		},
	};
</script>
