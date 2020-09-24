import Vue from 'vue';

// Import global components
import Icon from './common/Icon.vue';
import EButton from './common/Button.vue';
import Container from './common/Container.vue';
import Placeholder from './common/Placeholder.vue';
import PageBuilder from './global/PageBuilder.vue';
import ContentBuilder from './global/ContentBuilder.vue';

// Register global components
Vue.component('Icon', Icon);
Vue.component('EButton', EButton);
Vue.component('Container', Container);
Vue.component('Placeholder', Placeholder);
Vue.component('PageBuilder', PageBuilder);
Vue.component('ContentBuilder', ContentBuilder);

// Import page components
import Intro from './builder/Intro.vue';
import Cta from './builder/Cta.vue';

// Register page components
Vue.component('Intro', Intro);
Vue.component('Cta', Cta);
