<template>
<Page @navigatedTo="navigatedTo()">
  <ActionBar>
    <GridLayout width="100%" columns="auto, *">
      <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
      <Label class="title" text="Podify"  col="1"/>
    </GridLayout>
  </ActionBar>

  <RadSideDrawer ref="drawer">
    <SideDrawer ~drawerContent></SideDrawer>

    <StackLayout ~mainContent>
      <Button text="Home" @tap="route()" />
    </StackLayout>
  </RadSideDrawer>
</Page>
</template>

<script lang="ts">
import SideDrawer from '~/components/SideDrawer.vue';
import routes from '~/routes';

export default {
    components: {
        SideDrawer,
    },
    mounted() {
        this.route();
    },
    methods: {
        route() {
            if (!this.$store.state.serverConfig.configured) {
                this.$nextTick(() => {
                    this.$navigateTo(routes.serverSetup, { clearHistory: true });
                })
            } else if (!this.$store.state.serverConfig.configured) {
                this.$nextTick(() => {
                    this.$navigateTo(routes.serverSetup, { clearHistory: true });
                })
            }
        },
        navigatedTo() {
            console.log("Navigated to App");
            this.route();
        },
    },
}
</script>

<style scoped>
</style>
