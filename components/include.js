import Vue from 'vue';

// Import components
import Container from './common/Container.vue';
import Placeholder from './common/Placeholder.vue';
import PageBuilder from './global/PageBuilder.vue';
import ContentBuilder from './global/ContentBuilder.vue';

// Register components
Vue.component('Container', Container);
Vue.component('Placeholder', Placeholder);
Vue.component('PageBuilder', PageBuilder);
Vue.component('ContentBuilder', ContentBuilder);
