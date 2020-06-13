<template>
<Page>
  <ActionBar title="Test title">
    <GridLayout width="100%" columns="auto, *">
      <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
      <Label class="title" text="Podify"  col="1"/>
    </GridLayout>
  </ActionBar>

  <RadSideDrawer ref="drawer">
    <SideDrawer ~drawerContent></SideDrawer>
    <Login ~mainContent></Login>
  </RadSideDrawer>
</Page>
</template>

<script lang="ts">
import SideDrawer from '~/components/SideDrawer.vue';
import Login from '~/components/Login.vue';

export default {
    components: {
        SideDrawer,
        Login,
    }
}
</script>

<style scoped>
ActionBar {
  background-color: #222b3b;
  color: #ffffff;
}

.title {
  text-align: left;
  padding-left: 16;
}
</style>
