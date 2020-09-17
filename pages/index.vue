<template>
	<div>
		<section>
			<container>
				<h1>Carousel</h1>

				<ul>
					<li
						v-for="(message, index) in $data.model.carousel.messages"
						:key="index"
						v-text="message.title"
					/>
				</ul>
			</container>
		</section>

		<section>
			<container>
				<h1>Cards</h1>

				<div
					v-for="(card, index) in $data.model.cards"
					:key="index"
				>
					<span v-text="card.icon" />

					<h2 v-text="card.title" />

					<p v-text="card.content" />

					<ul>
						<li
							v-for="(item, i) in card.items"
							:key="i"
							v-text="item"
						/>
					</ul>

					<a
						:href="card.link.url"
						v-text="card.link.title"
					/>

					<button
						v-text="card.cta.title"
					/>
				</div>
			</container>
		</section>
	</div>
</template>

<script>
	export default {
		async asyncData ({ $content }) {
			return await $content('home').fetch();
		},
	};
</script>
