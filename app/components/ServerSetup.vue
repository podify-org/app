<template>
<Page>
  <ActionBar>
    <GridLayout width="100%" columns="auto, *">
      <Label class="title" text="Server Setup"  col="1"/>
    </GridLayout>
  </ActionBar>

  <StackLayout>
    <Label class="form-label"
           text="API URL"
           />
    <TextField hint="https://..."
               v-model="url"
               keyboardType="url"
               />
    <Button text="Connect"
            @tap="connect()"
            :isEnabled="!connecting"
            class="-primary"
            />
    <TextView v-model="statusText"
              v-if="statusText"
              :editable="false"
              />
  </StackLayout>
</Page>
</template>

<script lang="ts">
const appSettings = require("tns-core-modules/application-settings");
import queries from '~/queries';
import routes from '~/routes';

export default {
    data() {
        return {
            url: appSettings.getString("serverUrl"),
            statusText: '',
            connecting: false,
        }
    },
    methods: {
        connect() {
            appSettings.setString("serverUrl", this.url);

            this.statusText = "Connecting...";
            this.connecting = true;

            this.$apollo.query({
                query: queries.serverInfo,
                fetchPolicy: 'no-cache',
            }).then(({ data: { serverInfo: { rootUrl } } }) => {
                this.$store.commit('connectionEstablished');
                this.statusText = "Connected!";
                this.$navigateTo(routes.login);
            }).catch(e => {
                this.$store.commit('connectionFailed');
                this.statusText = e.toString();
            }).finally(() => {
                this.connecting = false;
            });
        },
    },
    mounted() {
        // this.request();
    }
}
</script>

<style scoped>
.connect-button {
  vertical-align: center;
  text-align: center;
  font-size: 30;
  color: #333333;
}
</style>
