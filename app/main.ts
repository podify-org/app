import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'

const appSettings = require("tns-core-modules/application-settings");

if(TNS_ENV !== 'production') {
    Vue.use(VueDevtools, { host: 'laptop.zt.maxhollmann.com:8098' });
}
import store from './store/index'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

import VueApollo from "vue-apollo";
import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
} from "apollo-boost";
import { createHttpLink } from "apollo-link-http";

Vue.use(VueApollo);

const customFetch = (uri, options) => {
    const url = appSettings.getString("serverUrl");
    return fetch(url, options);
};

const httpLink = createHttpLink({ fetch: customFetch });

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

new Vue({
    store,
    apolloProvider,
    render: h => h('frame', [h(App)]),
}).$start()
