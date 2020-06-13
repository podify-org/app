import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
    Vue.use(VueDevtools, { host: 'laptop.zt.maxhollmann.com:8098' });
}
import store from './store'

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
    ApolloLink
} from "apollo-boost";
import { onError } from "apollo-link-error";

Vue.use(VueApollo);
const httpLink = new HttpLink({
    uri: "http://laptop.zt.maxhollmann.com:3000/api",
});

export const apolloClient = new ApolloClient({
    link: ApolloLink.from([httpLink]),
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
