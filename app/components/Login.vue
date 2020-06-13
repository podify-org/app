<template>
<GridLayout columns="*" rows="*">
  <Label class="connect-button"
         text="Connect!"
         col="0" row="0"
         @tap="request()"
         />

  <Label v-if="connected"
         :text="`Connected to ${serverUrl}`"
         col="0" row="0"
         @tap="request()"
         />

</GridLayout>
</template>

<script lang="ts">
import queries from '~/queries';

export default {
    data() {
        return {
            connected: false,
            serverUrl: null,
        }
    },
    methods: {
        request() {
            this.$apollo.query({
                query: queries.serverInfo,
                fetchPolicy: 'no-cache',
            }).then(({ data: { serverInfo: { rootUrl } } }) => {
                this.connected = true;
                this.serverUrl = rootUrl;
                console.log("Got a result!");
                console.log(rootUrl);
            }).catch(e => {
                console.log("Error!");
                console.log(typeof(e));
                console.log(e);
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
