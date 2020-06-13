<template>
<Page>
  <ActionBar title="Test title">
    <GridLayout width="100%" columns="auto, *">
      <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
      <Label class="title" text="Welcome to NativeScript-Vue!"  col="1"/>
    </GridLayout>
  </ActionBar>

  <RadSideDrawer ref="drawer">
    <SideDrawer ~drawerContent></SideDrawer>
    <GridLayout ~mainContent columns="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0"/>
    </GridLayout>
  </RadSideDrawer>
</Page>
</template>

<script lang="ts">
import SideDrawer from '~/components/SideDrawer.vue';

export default {
    data() {
        return {
            msg: 'Hello love!',
        }
    },
    components: {
        SideDrawer,
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

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
