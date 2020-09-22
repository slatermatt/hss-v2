<template>
	<div>
		<intro v-bind="$data.model.intro" />

		<contact-info v-bind="$data.model.contactInfo" />

		<section class="border border-blue p-5 overflow-scroll">
			<span>component: contact-form</span>

			<div class="mt-4">
				<pre v-text="$data.model.contactForm" />
			</div>
		</section>
	</div>
</template>

<script>
	import ContactInfo from '../../components/builder/ContactInfo';

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
		},
	};
</script>
